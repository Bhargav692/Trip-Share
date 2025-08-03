import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SearchTrip.css';

function SearchTrip() {
    const [experiences, setExperiences] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [locationFilter, setLocationFilter] = useState('');

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/experience');
                setExperiences(res.data);
                setFiltered(res.data);
            } catch (err) {
                console.error('Error fetching experiences:', err);
            }
        };

        fetchExperiences();
    }, []);

    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Filter by location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const loc = (e.target.value || '').toLowerCase();
                            if (!loc) {
                                setFiltered(experiences);
                            } else {
                                setFiltered(
                                    experiences.filter(exp =>
                                        (exp.location || '').toLowerCase().includes(loc)
                                    )
                                );
                            }
                        }
                    }}
                />
            </div>

            {filtered.map(exp => (
                <div key={exp._id} className="experience-card">
                    <h3><Link to={`/experience/${exp._id}`}>{exp.title}</Link></h3>
                </div>
            ))}
        </div>
    );
}

export default SearchTrip;
