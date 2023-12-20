import React, { useEffect, useState } from 'react'
import doctorsList from './doctors_data.json'
import { Link, useParams } from 'react-router-dom';

import './Home.scss';

const Home = () => {
    // const [doctors, setDoctors] = useState([]);

    // useEffect(() => {
    //     setDoctors(doctorsList);
    // }, []);

    // with pagination
    // const [doctors, setDoctors] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const doctorsPerPage = 20;

    // useEffect(() => {
    //     const startIndex = (currentPage - 1) * doctorsPerPage;
    //     const endIndex = startIndex + doctorsPerPage;
    //     const displayedDoctors = doctorsList.slice(startIndex, endIndex);
    //     setDoctors(displayedDoctors);
    // }, [currentPage]);

    // const totalPages = Math.ceil(doctorsList.length / doctorsPerPage);

    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    const [doctors, setDoctors] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const doctorsPerPage = 20;
    const [searchQuery, setSearchQuery] = useState({
        name: '',
        location: '',
        age: '',
        specialty: '',
        availability: ''
    });

    const { pageNumber } = useParams();
    console.log('Page number:', pageNumber);

    // For doctors data fetching
    useEffect(() => {
        console.log('Page number:', pageNumber);

        const parsedPageNumber = parseInt(pageNumber, 10);

        if (!pageNumber) {
            const firstPageDoctors = doctorsList.slice(0, 20);
            setDoctors(firstPageDoctors);
        } else if (isNaN(parsedPageNumber) || parsedPageNumber <= 0) {
            console.error('Invalid page number:', parsedPageNumber);
            return;
        } else {
            const startIndex = (parsedPageNumber - 1) * doctorsPerPage;
            const endIndex = startIndex + doctorsPerPage;
            const displayedDoctors = doctorsList.slice(startIndex, endIndex);
            setDoctors(displayedDoctors);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pageNumber]);

    useEffect(() => {
        console.log('Doctors:', doctors);
    }, [doctors]);

    // For Searching
    const performSearch = () => {
        const filteredDoctors = doctorsList.filter(doctor => {
            const nameMatch = !searchQuery.name || doctor.Name.toLowerCase().includes(searchQuery.name.toLowerCase());
            const locationMatch = !searchQuery.location || doctor.Location.toLowerCase().includes(searchQuery.location.toLowerCase());
            let ageMatch = true;
            if (searchQuery.age) {
                ageMatch = doctor.Age.toString().includes(searchQuery.age);
            }

            const specialtyMatch = !searchQuery.specialty || doctor.Specialty.toLowerCase().includes(searchQuery.specialty.toLowerCase());

            const availabilityMatch =
                searchQuery.availability === '' ||
                doctor.Availability.toLowerCase().includes(searchQuery.availability.toLowerCase());

            return nameMatch && locationMatch && ageMatch && specialtyMatch && availabilityMatch;
        });

        setSearchResults(filteredDoctors.slice(0, doctorsPerPage));
        console.log(searchResults);
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setSearchQuery({ ...searchQuery, [name]: value });
        performSearch();
    };

    const totalPages = Math.ceil(doctorsList.length / doctorsPerPage);

    const paginationLinks = Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
            <Link key={page} to={`/doctors/${page}`}>
                Page {page}
            </Link>
        );
    });

    return (
        <div className='mainDiv'>
            <div className='searchBar'>
                <input className='nameBar' placeholder='Name' name='name' value={searchQuery.name} onChange={handleInputChange} />
                <input className='locBar' placeholder='Location' name='location' value={searchQuery.location} onChange={handleInputChange} />
                <input className='ageBar' placeholder='Age' name='age' value={searchQuery.age} onChange={handleInputChange} />
            </div>
            <div className="moreFilters">
                <input className='speciality' placeholder='Specialty' name='specialty' value={searchQuery.specialty} onChange={handleInputChange} />
                <input className='availability' placeholder='Available' name='availability' value={searchQuery.availability} onChange={handleInputChange} />
            </div>

            {searchResults.length === 0
                ? ''
                :
                (
                    <div className='total-cards'>
                        {searchResults.map((result, index) => (
                            <div key={index} className='profile-card'>
                                <h3>Name: {result.Name}</h3>
                                <p>Age: {result.Age}</p>
                                <p>Specialty: {result.Specialty}</p>
                                <p>Location: {result.Location}</p>
                                <p>Availability: {result.Availability}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                )
            }

            <div className='header-main'>List of Doctors 🧑‍⚕️</div>
            <div className='total-cards'>
                {doctors.map((doctor, index) => (
                    <div key={index} className='profile-card'>
                        <h3>Name: {doctor.Name}</h3>
                        <p>Age: {doctor.Age}</p>
                        <p>Specialty: {doctor.Specialty}</p>
                        <p>Location: {doctor.Location}</p>
                        <p>Availability: {doctor.Availability}</p>
                        <hr />
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                {paginationLinks}
            </div>

            {/* <div>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button key={page} onClick={() => handlePageChange(page)}>
                        {page}
                    </button>
                ))}
            </div> */}
        </div>
    )
}

export default Home