import React from 'react';

const About = () => {
    return (
        <>
            <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                    <p>
                        👋 Hi! I'm Harsha Tembhare, a passionate 2nd-year B.Tech student specializing in Computer Science (AI).
                    </p>
                    <p>
                        🚀 My core strength lies in building responsive, user-friendly websites using modern web technologies like HTML5, CSS3, JavaScript, and React. I enjoy transforming ideas into interactive digital experiences and constantly challenge myself with new tools and designs.
                    </p>
                    <p>
                        🧠 I’ve completed several personal projects—from portfolio sites to mini web apps—and I’m always looking to learn and grow.
                    </p>
                    <p>
                        🔍 I’m currently seeking an internship where I can contribute, learn from a professional team, and gain real-world development experience.
                    </p>
                    <p>
                        💼 Let’s connect if you're hiring or want to collaborate on exciting frontend projects!
                    </p>
                    <div>
                        <span className="font-semibold">Tech Stack:</span>
                        <ul className="list-disc list-inside ml-4">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Figma</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-semibold">Interests:</span>
                        <ul className="list-disc list-inside ml-4">
                            <li>UI/UX Design</li>
                            <li>Open Source</li>
                            <li>Web Animations</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;