# Add Person Application

A simple React-based application that allows users to add, view, and manage a list of people. The app features data persistence using local storage and provides functionalities for adding and deleting records.

## Features

- **Add Person**: Fill out a form with details such as name, date of birth, Aadhar number, mobile number, and age to add a new person to the list.
- **View List**: Displays a table of all added people with serial numbers and actions.
- **Delete Person**: Remove a person from the list using the delete button in the table.
- **Data Persistence**: Data is stored in the browser's local storage and remains available even after refreshing the page.

## Technologies Used

- React.js
- Local Storage
- Tailwind CSS (for styling)

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/add-person-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd add-person-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## How to Use

1. **Add a New Person**:
   - Click the `Add Person` button.
   - Fill out the form with the required details:
     - Name
     - Date of Birth
     - Aadhar Number (12 digits)
     - Mobile Number (10 digits)
     - Age
   - Click the `Save` button to add the person to the list.
   - The person will appear in the table.

2. **Delete a Person**:
   - Click the `Delete` button in the "Actions" column for the corresponding person.
   - The person will be removed from the list.

## Project Structure

```plaintext
src/
├── components/
│   └── AddPerson.jsx  # Main component for the app
├── App.js                   # Root component
├── index.js                 # Entry point
├── styles.css               # Custom styles (optional)
├── package.json             # Project dependencies and scripts
```

## Screenshots

### Add Person Form
![Add Person Form](https://via.placeholder.com/600x400)

### Person List
![Person List](https://via.placeholder.com/600x400)

## Future Improvements

- Add editing functionality for existing records.
- Add validation feedback for incorrect or missing inputs.
- Improve table styling and responsiveness for smaller screens.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests to improve the project.
