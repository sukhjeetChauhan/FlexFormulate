import request from 'superagent'

export default async function getExercise(part: string) {
  const result = await request
    .get(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}?limit=20`
    )
    .set('X-RapidAPI-Key', 'd589468f47msh1564e67cb464374p1e3817jsn0ba295f475ab')
    .set('X-RapidAPI-Host', 'exercisedb.p.rapidapi.com')

  return result.body
}
