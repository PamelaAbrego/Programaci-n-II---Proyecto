from flask import Flask, render_template
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/")
def home():
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


@app.route("/mision_vision")
def mision_vision():
    return render_template("mision_vision.html")


@app.route("/admin_gruas")
def admin_gruas():
    return render_template("admin_gruas.html")


@app.route("/form_gruas")
def form_gruas():
    return render_template("form_gruas.html")


if __name__ == "__main__":
    app.run(debug=True)
