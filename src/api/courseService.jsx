export const getAllCourses = async () => {
    const data = await fetch('https://chessworkz.herokuapp.com/course/all')
    const json = await data.json()
    return json
}