import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const list = [
    {
        title: "React",
        url: "https://reactjs.org/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: "Redux",
        url: "https://redux.js.org/",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
    {
        title: "Vite",
        url: "https://vitejs.dev/",
        author: "Evan You",
        num_comments: 1,
        points: 3,
        objectID: 2,
    },
];

function App() {
    const [count, setCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter the list based on the search term
    const filteredList = list.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>

            {/* Search input and list of hacker stories */}
            <div className="stories">
                <h2>Hacker Stories</h2>
                <label htmlFor="search">Search: </label>
                <input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search stories..."
                />
                <ul className="list">
                    {filteredList.map((item) => (
                        <li key={item.objectID} className="list-item">
                            <span>
                                <a href={item.url} className="list-item-link">{item.title}</a>
                            </span>
                            <span className="list-item-author">{item.author}</span>
                            <span className="list-item-comments">{item.num_comments} comments</span>
                            <span className="list-item-points">{item.points} points</span>
                        </li>
                    ))}
                </ul>
            </div>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;