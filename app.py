from flask import Flask, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/principal")
def principal():
    return render_template("principal.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/gruas")
def gruas():
    return render_template("gruas.html")


@app.route("/cotizaciones")
def cotizaciones():
    return render_template("cotizaciones.html")


if __name__ == "__main__":
    app.run(debug=True)
