const validateSignup = (req, res, next) => {
    const { name, email, phone, password, confirmPassword } = req.body;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!name.match(/^[A-Za-z\s]+$/)) {
      return res.status(400).json({ message: "Name must contain only alphabets" });
    }
    if (!email.match(emailRegex)) {
      return res.status(400).json({ message: "Invalid email address" });
    }
    if (!phone.match(phoneRegex)) {
      return res.status(400).json({ message: "Phone must be exactly 10 digits" });
    }
    if (!password.match(passwordRegex)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters, contain 1 letter, 1 number, and 1 special character",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
  
    next();
  };
  
  module.exports = validateSignup;
  