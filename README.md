# Pantry Tracker

Welcome to Pantry Tracker, an AI-powered application that helps you manage your pantry items and find recipe recommendations based on the ingredients you have. This project leverages Next.js, Firebase, Material-UI, and OpenAI API to deliver a seamless user experience. Deployed on Vercel and utilizing GitHub Actions for CI/CD, it is a modern solution to streamline pantry management and meal planning.

## Features

- **Item Management:** Add, update, and delete items in your pantry.
- **Search Functionality:** Quickly find items in your pantry with a user-friendly search interface.
- **Recipe Recommendations:** Get recipe suggestions based on the ingredients you have in your pantry.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **AI Integration:** Utilizes OpenAI API to recommend recipes based on your pantry items.

## Tech Stack

- **Frontend:** Next.js, Material-UI
- **Backend:** Firebase (Authentication, Firestore)
- **AI Integration:** OpenAI API
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- Firebase account
- OpenAI API key

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/rohanmathewalex/pantry-tracker.git
    cd pantry-tracker
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Firebase**

    - Create a Firebase project and configure authentication and Firestore.
    - Create a `.env.local` file in the root directory and add your Firebase and OpenAI credentials:

      ```env
      NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
      NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
      OPENAI_API_KEY=your_openai_api_key
      ```

4. **Run the Development Server**

    ```bash
    npm run dev
    ```

    Open `http://localhost:3000` in your browser to view the application.

### Deployment

The project is deployed on Vercel. For updates and changes, push your code to the `main` branch, and GitHub Actions will handle the deployment.

### CI/CD

This project uses GitHub Actions for continuous integration and deployment. Ensure that your workflow files are correctly configured to handle builds and deployments.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Next.js:** For providing a robust framework for React applications.
- **Material-UI:** For the beautiful and responsive UI components.
- **Firebase:** For authentication and database services.
- **OpenAI API:** For enabling intelligent recipe recommendations.

## Contact

For any questions or feedback, please reach out to [Rohan Mathew Alex](mailto:rohanmathewalex6674@gmail.com).

---

Happy cooking and enjoy managing your pantry!
