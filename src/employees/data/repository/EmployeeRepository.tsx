const URL = 'https://reqres.in/api/users'

const EmployeeRepository = {
    getPage: async (id: number) => {
        const res = await fetch(`${URL}?page=${id}`);
        if (!res.ok) throw new Error(`Status code ${res.status}`)
        const dataFetched = await res.json();
        const { data } = dataFetched
        return data
    },

    getUserById: async (id: number) => {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) throw new Error(`Error fetching data. Status code ${res.status}`);
        const data = await res.json();
        return data.data;
    }

}

export default EmployeeRepository