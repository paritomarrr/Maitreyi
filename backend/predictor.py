from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
from flask import Flask, request, jsonify
import joblib
import pandas as pd


# Read in the preprocessed data from the CSV file
data = pd.read_csv('menstrual_cycle__data_preprocessed.csv', error_bad_lines=False)

app = Flask(__name__)

# Load the saved model from disk
model = joblib.load('menstrual_cycle_prediction_model.joblib')

# Split the data into features and target
X = data.drop('period_start_data', axis=1)
Y = data['period_start_date']

# Split the data into training and testing sets
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

# Evaluate the model on the test set
Y_pred = model.predict(X_test)
rmse = mean_squared_error(Y_test, Y_pred, squared=False)
print('RMSE:', rmse)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the POST request
    cycle_length = int(request.form['cycle_length'])
    period_length = int(request.form['period_length'])
    period_last_date = pd.to_datetime(request.form['period_last_date'])
    
    # Preprocess the data
    data = {'cycle_length': cycle_length, 'period_length': period_length}
    data = pd.DataFrame(data, index=[0])
    data['days_since_last_period'] = (pd.Timestamp.now() - period_last_date).days
    
    # Make a prediction using the loaded model
    prediction = model.predict(data)[0]
    
    # Convert the prediction to a string and return it
    prediction = pd.Timestamp.now() + pd.DateOffset(days=prediction)
    prediction = prediction.strftime('%Y-%m-%d')
    return jsonify({'prediction': prediction})


if __name__ == '__main__':
    app.run(debug=True)
