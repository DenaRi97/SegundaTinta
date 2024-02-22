// MÉTODO GET

export const getBooks = async () => {
    try {
        const response = await fetch('http://localhost:3000/books');
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching books', error);
    }
};

