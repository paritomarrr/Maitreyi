app = Flask(__name__)
CORS(app)
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    