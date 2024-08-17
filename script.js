function showCourseDetails(courseId) {
    const detailsContent = document.querySelector('#course-details .container');
    let content = '';

    if (courseId === 'business-admin') {
        content = `
            <h3>Business Administration</h3>
            <p>Price: R1500</p>
            <p>This course provides an in-depth understanding of business management principles.</p>
            <ul>
                <li>Module 1: Introduction to Business</li>
                <li>Module 2: Business Planning</li>
                <li>Module 3: Financial Management</li>
                <li>Module 4: Marketing Strategies</li>
            </ul>
            <div class="form-container">
                <h2>Purchase Course</h2>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <input type="text" name="card-number" placeholder="Card Number" required>
                    <input type="text" name="expiry-date" placeholder="Expiry Date (MM/YY)" required>
                    <input type="text" name="cvv" placeholder="CVV" required>
                    <button type="submit">Pay R1500 and Enroll</button>
                </form>
            </div>
            <div id="login-register">
                <h2>Login / Register</h2>
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </div>
        `;
    } else if (courseId === 'basic-computer') {
        content = `
            <h3>Basic Computer Skills</h3>
            <p>Price: R800</p>
            <p>This course covers fundamental computer skills necessary for modern workplaces.</p>
            <ul>
                <li>Module 1: Computer Basics</li>
                <li>Module 2: Office Applications</li>
                <li>Module 3: Internet and Email</li>
                <li>Module 4: Troubleshooting</li>
            </ul>
            <div class="form-container">
                <h2>Purchase Course</h2>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <input type="text" name="card-number" placeholder="Card Number" required>
                    <input type="text" name="expiry-date" placeholder="Expiry Date (MM/YY)" required>
                    <input type="text" name="cvv" placeholder="CVV" required>
                    <button type="submit">Pay R800 and Enroll</button>
                </form>
            </div>
            <div id="login-register">
                <h2>Login / Register</h2>
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </div>
        `;
    } else if (courseId === 'first-aid') {
        content = `
            <h3>First Aid</h3>
            <p>Price: R1000</p>
            <p>This course teaches essential first aid techniques for various emergencies.</p>
            <ul>
                <li>Module 1: CPR and AED</li>
                <li>Module 2: Wound Care</li>
                <li>Module 3: Choking Relief</li>
                <li>Module 4: Emergency Response</li>
            </ul>
            <div class="form-container">
                <h2>Purchase Course</h2>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <input type="text" name="card-number" placeholder="Card Number" required>
                    <input type="text" name="expiry-date" placeholder="Expiry Date (MM/YY)" required>
                    <input type="text" name="cvv" placeholder="CVV" required>
                    <button type="submit">Pay R1000 and Enroll</button>
                </form>
            </div>
            <div id="login-register">
                <h2>Login / Register</h2>
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </div>
        `;
    }

    detailsContent.innerHTML = content;
    document.getElementById('course-details').style.display = 'block';
    document.getElementById('login-register').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            header.style.top = '-70px'; // Hide header
        } else {
            header.style.top = '0'; // Show header
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
