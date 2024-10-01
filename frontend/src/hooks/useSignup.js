import { useState } from "react";
import { toast } from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async (fullName, username, password, confirmPassword, gender) => {

        const isValid = handleInputError({ fullName, username, password, confirmPassword, gender });
        if (!isValid) return;

        setLoading(true); // Start loading when validation is successful

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            });

            const data = await res.json();
            console.log(data);

            // You can show a success toast if needed
          

        } catch (error) {
            toast.error(error.message || 'An error occurred');
        } finally {
            setLoading(false); // Stop loading regardless of success or failure
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputError({ fullName, username, password, confirmPassword, gender }) {
    if (!confirmPassword || !fullName || !gender || !password || !username) {
        toast.error('Please fill in all fields');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return false;
    }

    return true;
}
