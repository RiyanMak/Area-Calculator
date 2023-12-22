from flask import Flask, render_template, request
import numpy as np

app = Flask(__name__)

class Area:
    def __init__(self, radius, length, width):
        self.radius = radius
        self.length = length
        self.width = width

    def circle_area(radius):
        return np.pi * radius**2  

    def rectangle_area(length, width):
        return length * width

    def square_area(length):
        return length * length

@app.route('/')
def index():
    return render_template('open.html')

@app.route('/circle', methods=['GET', 'POST'])
def circle():
    if request.method == 'POST':
        radius = float(request.form['radius'])
        area_circle = Area.circle_area(radius)
        return render_template('result.html', area_circle=area_circle)
    return render_template('circle.html')

@app.route('/square', methods=['GET', 'POST'])
def square():
    if request.method == 'POST':
        length = float(request.form['length'])
        area_square = Area.square_area(length)
        return render_template('result.html', area_square=area_square)
    return render_template('square.html')

@app.route('/rectangle', methods=['GET', 'POST'])
def rectangle():
    if request.method == 'POST':
        length = float(request.form['length'])
        width = float(request.form['width'])
        area_rectangle = Area.rectangle_area(length, width)
        return render_template('result.html', area_rectangle=area_rectangle)
    return render_template('rectangle.html')

if __name__ == '__main__':
    app.run(debug=True)


