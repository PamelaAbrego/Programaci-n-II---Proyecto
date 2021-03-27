from flask import Flask, render_template

app = Flask(__name__)


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


if __name__ == "__main__":
    app.run(debug=True)
