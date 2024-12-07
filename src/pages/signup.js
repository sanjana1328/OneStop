import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const validationRules = {
        name: {
            regex: /^[A-Za-z]+$/,
            message: 'Name should contain only alphabets (A-Z or a-z)',
        },
        email: {
            regex: /^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/,
            message: 'Please enter a valid email address (e.g., user@example.com)',
        },
        phone: {
            regex: /^\d{10}$/,
            message: 'Enter a valid 10-digit phone number',
        },
        password: {
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
                'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character',
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate input on change
        if (validationRules[name] && !validationRules[name].regex.test(value)) {
            setFieldErrors({ ...fieldErrors, [name]: validationRules[name].message });
        } else {
            const newErrors = { ...fieldErrors };
            delete newErrors[name];
            setFieldErrors(newErrors);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Final validation before submission
        for (const field in validationRules) {
            if (!validationRules[field].regex.test(formData[field])) {
                setFieldErrors({ ...fieldErrors, [field]: validationRules[field].message });
                return;
            }
        }

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setFieldErrors({
                ...fieldErrors,
                confirmPassword: 'Passwords do not match',
            });
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(data.user || formData));
                navigate('/');
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch {
            setError('Server error. Please try again later.');
        }
    };

    return (
        <div className="body">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2 align="center">Sign Up</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={fieldErrors.name ? 'invalid' : ''}
                        />
                        {fieldErrors.name && <p className="error">{fieldErrors.name}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            value={formData.email}
                            onChange={handleChange}
                            className={fieldErrors.email ? 'invalid' : ''}
                        />
                        {fieldErrors.email && <p className="error">{fieldErrors.email}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone No"
                            value={formData.phone}
                            onChange={handleChange}
                            className={fieldErrors.phone ? 'invalid' : ''}
                        />
                        {fieldErrors.phone && <p className="error">{fieldErrors.phone}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={fieldErrors.password ? 'invalid' : ''}
                        />
                        {fieldErrors.password && <p className="error">{fieldErrors.password}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={(e) => {
                                setFormData({ ...formData, confirmPassword: e.target.value });
                                if (formData.password !== e.target.value) {
                                    setFieldErrors({
                                        ...fieldErrors,
                                        confirmPassword: 'Passwords do not match',
                                    });
                                } else {
                                    const newErrors = { ...fieldErrors };
                                    delete newErrors.confirmPassword;
                                    setFieldErrors(newErrors);
                                }
                            }}
                            className={fieldErrors.confirmPassword ? 'invalid' : ''}
                        />
                        {fieldErrors.confirmPassword && (
                            <p className="error">{fieldErrors.confirmPassword}</p>
                        )}
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}

export default SignUp;
