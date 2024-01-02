const data = [
    {
        image: 'Technology1.jpg',
        category: 'Technology',
        fullname: 'Michael Chang',
        jobTitle: 'Tech Innovator',
        readingTime: '10 min',
        date: '2023-05-20',
        title: 'Emerging Technologies in 2024',
        description: 'A glimpse into the technological advancements and their potential impact on various industries.'
    },
    {
        image: 'TechImage1.jpg',
        category: 'Technology',
        fullname: 'Jennifer Davis',
        jobTitle: 'AI Developer',
        readingTime: '8 min',
        date: '2023-06-15',
        title: 'Revolutionizing Healthcare with AI',
        description: 'Exploring how Cultureificial intelligence is transforming the healthcare landscape.'
    },
    {
        image: 'TechImage2.jpg',
        category: 'Technology',
        fullname: 'Alex Rodriguez',
        jobTitle: 'Cybersecurity Expert',
        readingTime: '12 min',
        date: '2023-07-02',
        title: 'Next-Gen Cyber Threats',
        description: 'Diving deep into the evolving landscape of cyber threats and the measures to counteract them.'
    },
    {
        image: 'TechImage3.jpg',
        category: 'Technology',
        fullname: 'Sophie Lee',
        jobTitle: 'Blockchain Architect',
        readingTime: '15 min',
        date: '2023-08-18',
        title: 'Decentralized Finance (DeFi): A Paradigm Shift in Banking',
        description: 'Examining the impact of decentralized finance on traditional banking systems.'
    },
    {
        image: 'TechImage4.jpg',
        category: 'Technology',
        fullname: 'Robert Smith',
        jobTitle: 'Robotics Engineer',
        readingTime: '9 min',
        date: '2023-09-05',
        title: 'AI-Powered Robots: Shaping the Future of Manufacturing',
        description: 'The role of Cultureificial intelligence in enhancing efficiency and precision in manufacturing processes.'
    },
    {
        image: 'TechImage5.jpg',
        category: 'Technology',
        fullname: 'Emily White',
        jobTitle: 'Space Exploration Scientist',
        readingTime: '14 min',
        date: '2023-10-21',
        title: 'The Next Frontier: Breakthroughs in Space Exploration Technologies',
        description: 'Highlighting the latest advancements propelling humanity\'s exploration beyond our planet.'
    },
    {
        image: 'TechImage6.jpg',
        category: 'Technology',
        fullname: 'David Johnson',
        jobTitle: '5G Network Architect',
        readingTime: '11 min',
        date: '2023-11-12',
        title: 'Unleashing the Power of 5G: Transforming Connectivity',
        description: 'Exploring the potential of 5G technology in revolutionizing communication and connectivity.'
    },
    {
        image: 'TechImage7.jpg',
        category: 'Technology',
        fullname: 'Elena MCultureinez',
        jobTitle: 'Augmented Reality Developer',
        readingTime: '7 min',
        date: '2023-12-03',
        title: 'Immersive Experiences: The Rise of Augmented Reality',
        description: 'Examining the applications and impact of augmented reality in various industries.'
    },
    {
        image: 'TechImage8.jpg',
        category: 'Technology',
        fullname: 'Ryan Brown',
        jobTitle: 'Renewable Energy Researcher',
        readingTime: '13 min',
        date: '2024-01-20',
        title: 'Sustainable Future: Innovations in Renewable Energy',
        description: 'Exploring groundbreaking technologies driving the shift towards sustainable and clean energy sources.'
    },
    {
        image: 'TechImage9.jpg',
        category: 'Technology',
        fullname: 'Michelle Turner',
        jobTitle: 'Biotech Scientist',
        readingTime: '10 min',
        date: '2024-02-08',
        title: 'Gene Editing Breakthroughs: Transforming Medicine',
        description: 'A look into the latest advancements in gene editing and their potential in medical breakthroughs.'
    },
    {
        image: 'TechImage10.jpg',
        category: 'Technology',
        fullname: 'Daniel Clark',
        jobTitle: 'Autonomous Vehicles Engineer',
        readingTime: '16 min',
        date: '2024-03-15',
        title: 'Driving into the Future: The Evolution of Autonomous Vehicles',
        description: 'Examining the advancements and challenges in the development of self-driving cars and their impact on transportation.'
    },
    {
        image: 'CultureImage1.jpg',
        category: 'Culture',
        fullname: 'Sophia Anderson',
        jobTitle: 'Digital Artist',
        readingTime: '8 min',
        date: '2023-06-25',
        title: 'Digital Renaissance: The Evolution of Digital Culture',
        description: 'Exploring the transformative impact of digital technologies on the world of Culture.'
    },
    {
        image: 'CultureImage2.jpg',
        category: 'Culture',
        fullname: 'Oliver Hughes',
        jobTitle: 'Contemporary Painter',
        readingTime: '12 min',
        date: '2023-07-12',
        title: 'Exploring Boundaries: The Artistry of Contemporary Paintings',
        description: 'An in-depth analysis of contemporary painting styles and their cultural significance.'
    },
    {
        image: 'CultureImage3.jpg',
        category: 'Culture',
        fullname: 'Emma Walker',
        jobTitle: 'Sculptor',
        readingTime: '15 min',
        date: '2023-08-28',
        title: 'Form and Emotion: The Craft of Sculpting in the Modern Age',
        description: 'Examining how sculptors express emotion and form through their creations in the contemporary Culture scene.'
    },
    {
        image: 'CultureImage4.jpg',
        category: 'Culture',
        fullname: 'Lucas Bennett',
        jobTitle: 'Street Artist',
        readingTime: '9 min',
        date: '2023-09-15',
        title: 'Urban Canvas: Street Culture as a Form of Expression',
        description: 'An exploration of the cultural impact and diversity of street Culture in urban environments.'
    },
    {
        image: 'CultureImage5.jpg',
        category: 'Culture',
        fullname: 'Isabella Garcia',
        jobTitle: 'Photographer',
        readingTime: '14 min',
        date: '2023-10-30',
        title: 'Capturing Moments: The Culture and Craft of Photography',
        description: 'Delving into the Artistry and techniques behind impactful photography in the digital age.'
    },
    {
        image: 'CultureImage6.jpg',
        category: 'Culture',
        fullname: 'Ethan Turner',
        jobTitle: 'Cinematographer',
        readingTime: '11 min',
        date: '2023-11-25',
        title: 'Frames in Motion: Cinematography as an Culture Form',
        description: 'Exploring the creative aspects and techniques behind cinematography as a unique form of visual storytelling.'
    },
    {
        image: 'CultureImage7.jpg',
        category: 'Culture',
        fullname: 'Ava Rodriguez',
        jobTitle: 'Digital Sculptor',
        readingTime: '9 min',
        date: '2023-12-10',
        title: 'Sculpting in Pixels: The World of Digital Sculpture',
        description: 'An in-depth look at the convergence of technology and Culture in the realm of digital sculpture and 3D modeling.'
    },
    {
        image: 'CultureImage8.jpg',
        category: 'Culture',
        fullname: 'Gabriel MCultureinez',
        jobTitle: 'Interactive Media Artist',
        readingTime: '13 min',
        date: '2024-01-05',
        title: 'Engaging the Audience: The Culture of Interactive Media Installations',
        description: 'Examining how Artists are pushing boundaries by creating immersive and interactive Culture installations.'
    },
    {
        image: 'CultureImage9.jpg',
        category: 'Culture',
        fullname: 'Lily Johnson',
        jobTitle: 'Street Culture Photographer',
        readingTime: '10 min',
        date: '2024-02-18',
        title: 'Lens on the Streets: Documenting the Evolution of Street Culture',
        description: 'A visual journey through the lens, capturing the vibrant and ever-changing world of street Culture photography.'
    },
    {
        image: 'CultureImage10.jpg',
        category: 'Culture',
        fullname: 'Mia Clark',
        jobTitle: 'Artificial Intelligence Artist',
        readingTime: '16 min',
        date: '2024-03-22',
        title: 'Culture in Algorithms: The Rise of AI-Generated Culturework',
        description: 'Exploring the intersection of Culture and Cultureificial intelligence, showcasing AI-generated Culturework and its implications.'
    },
    {
        image: 'IdeasImage1.jpg',
        category: 'Ideas',
        fullname: 'Nathan Turner',
        jobTitle: 'Innovation Strategist',
        readingTime: '12 min',
        date: '2023-06-30',
        title: 'Navigating Disruption: Strategies for Thriving in Times of Change',
        description: 'Discussing innovative approaches and strategies for organizations to thrive amidst rapid technological and societal changes.'
    },
    {
        image: 'IdeasImage2.jpg',
        category: 'Ideas',
        fullname: 'Hannah White',
        jobTitle: 'Thought Leader',
        readingTime: '14 min',
        date: '2023-07-18',
        title: 'The Power of Collective Intelligence: Unleashing Creativity in Teams',
        description: 'Examining the role of collective intelligence in fostering creativity and innovation within collaborative work environments.'
    },
    {
        image: 'IdeasImage3.jpg',
        category: 'Ideas',
        fullname: 'Noah Garcia',
        jobTitle: 'Futurist',
        readingTime: '10 min',
        date: '2023-08-05',
        title: 'Future Trends: Anticipating the Shaping Forces of Tomorrow',
        description: 'A forward-looking exploration of emerging trends and potential future scenarios that may reshape industries and societies.'
    },
    {
        image: 'IdeasImage4.jpg',
        category: 'Ideas',
        fullname: 'Aria Smith',
        jobTitle: 'Innovation Consultant',
        readingTime: '15 min',
        date: '2023-09-22',
        title: 'Design Thinking Unleashed: Transforming Challenges into Opportunities',
        description: 'Delving into the principles of design thinking and how it can be applied to solve complex problems and drive innovation.'
    },
    {
        image: 'IdeasImage5.jpg',
        category: 'Ideas',
        fullname: 'Elijah Turner',
        jobTitle: 'Social Impact Strategist',
        readingTime: '11 min',
        date: '2023-10-10',
        title: 'Creating Positive Change: Harnessing Business for Social Impact',
        description: 'Exploring the intersection of business and social impact, showcasing innovative initiatives driving positive change.'
    },
    {
        image: 'IdeasImage6.jpg',
        category: 'Ideas',
        fullname: 'Aiden Brown',
        jobTitle: 'Environmental Advocate',
        readingTime: '9 min',
        date: '2023-11-05',
        title: 'Green Innovations: Paving the Way for Sustainable Living',
        description: 'Exploring innovative ideas and technologies that contribute to sustainable living and environmental conservation.'
    },
    {
        image: 'IdeasImage7.jpg',
        category: 'Ideas',
        fullname: 'Madison Martinez',
        jobTitle: 'Education Visionary',
        readingTime: '13 min',
        date: '2023-12-20',
        title: 'Future of Learning: Revolutionizing Education for the Digital Age',
        description: 'Discussing forward-thinking concepts and technologies that are reshaping the landscape of education for future generations.'
    },
    {
        image: 'IdeasImage8.jpg',
        category: 'Ideas',
        fullname: 'Logan Turner',
        jobTitle: 'Inclusive Design Advocate',
        readingTime: '10 min',
        date: '2024-01-15',
        title: 'Designing for All: Embracing Inclusive Practices in Innovation',
        description: 'Highlighting the importance of inclusive design in creating products and solutions that cater to diverse user needs.'
    },
    {
        image: 'IdeasImage9.jpg',
        category: 'Ideas',
        fullname: 'Zoe Johnson',
        jobTitle: 'Community Empowerment Strategist',
        readingTime: '16 min',
        date: '2024-02-28',
        title: 'Building Resilient Communities: Strategies for Empowerment',
        description: 'Examining innovative approaches to community development that empower individuals and foster resilience in the face of challenges.'
    },
    {
        image: 'IdeasImage10.jpg',
        category: 'Ideas',
        fullname: 'Mason Clark',
        jobTitle: 'Tech Ethicist',
        readingTime: '14 min',
        date: '2024-03-25',
        title: 'Ethical Tech: Navigating the Intersection of Innovation and Morality',
        description: 'Discussing the ethical considerations and frameworks for responsible technology development in a rapidly advancing world.'
    }
];

export default data;