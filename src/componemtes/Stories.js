function Itens_Stories(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}
function Add_stories() {
    let envio = [{ Tittle: "G1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1xO5iilq74hin0tdNeugcHVO9v3eIk-KHA&usqp=CAU" }, { Tittle: "ESPN", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6Krt77p14oTv30BwXWR9sy8jLMS73ErNGg&usqp=CAU" }, { Tittle: "GR6 ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6Krt77p14oTv30BwXWR9sy8jLMS73ErNGg&usqp=CAU" }, { Tittle: "Futebol", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUf1mCTu2ojUWeSdM63TTVTRPZimK86OYIYw&usqp=CAU" }, { Tittle: "Bora coda!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_dJ5gFFo1L-EKFiDymkmc6mmtTJkTYlknA&usqp=CAU" }, { Tittle: "Messi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLsgywi6M-k7gXOGG1boYpZIRvkgNrnSqHg&usqp=CAU" }, { Tittle: "Corintiano", img: "https://www.futbox.com/img/v1/d27/d15/ab9/d21/0b41614555341d84cb14.png" }, { Tittle: "UFPR", img: "https://www.grancursosonline.com.br/upload/projeto/ufpr-universidade-federal-do-parana.png" }, { Tittle: "Vintage CUlture", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAq57-fwvJR_nXtEyZIEumW9TroOZNPbSQg&usqp=CAU" }]
    let storiess = envio.map(Ref => <Itens_Stories usuario={Ref.Tittle} img={Ref.img} />)

    return (
        <div class="stories">
            {storiess}

            <img class="setinha" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8AAACVlZWQkJDT09Pa2trX19f5+fk9PT3p6emJiYlXV1fc3Nyvr6/BwcGMjIwTExMgICCioqLj4+O4uLhQUFA0NDSfn597e3tWVlYtLS3Nzc1kZGRKSkooKChYYL64AAADMUlEQVR4nO2c23LiMBBEZfYiGwgB5569/P9nLuEpnoAtqbwldU+fD6Dm1PR4JLuKEIqJh/v+2HXdaTc+lP9Kuwzb7hP9Y+16VmfTGfp97ZJWJT5ZwTNj7apWZDhdEey6b7XrWo34fFWw6za1K1uL3Q1BGsW7m4IkQY0zghyKL7OGDEHt5w3xFfcLgvhBHRcN0bv4umwIrviWYIiteOs8MwV5FtMMkbuYlFJoxZQnDXZQF440BIo/kw1Rgxrf6RW/vKGhC+qQYQjaxZwmgiou3Z/wgzoc6RWX74jwQc1YiqiKP7IUIYP6XYpTHAQVUjHvcaOgtomWhgEyqJpFA2RQNYsGBbVNHCjqAGfQLLaJlobBQVAdKEIG1cEsamkwdNGBog5wBs1imzhYGjrA+VN0EFRIRS0Nf12EVHSwNDSLBsigahYNCmqbOFDUAc6gWWwTLQ0DZFA1iwbIoGoWDQpqmzhQ1AHOoFlsEy0Ng4OgOlB0EFRIRS0Nf12EVHSwNDSLBsigahYNCmqbOFDUAc5wV7vcEvKCOtQut4SsLu5qV1tE1iz+ql1tETld/F272DJyZhFyErO6eKhdayHps7itXWopyUEFHcSQrvindqHlzP0R+if+1q6zGPoe0s8h/bOUfh/Sn2noz6X0dwv6+yH9HZ/+PQ39uzb696X0gvTfLei/PdFHlP4bsGZwAmBENYMTACOqo5ovQfqIAgpqTaALak2gd5A+ovSCWhPoHaSPqNYEuqBmEF1QM4jeQfqI0gtqTaB3kD6iWhPogppBdEHNIHoH6SOqjy/ogloT6IJaE+gdpI8ovSD9DGpN+BIEjKiOahPoIwooSL8mdFSTYONoTaB3kD6iWhPogppBdEHNIHoH6SOqGz26IP2a2LMLDkfyiIaeXXBDHtEwsAtmtRAxoiG+k3cwZxViCoYX7oieeWUXDG/cET3zzC6YaAgb0ZCYUuAOpj1poAXDyC6YcDdEnsELS3cn8A6GxUMNvmCI3BH9YO6vxSkEQ9gxR/RCvHWuYREMYTgxR/RCfLoiONaual2+vK3p97VLWpthO/F7rF3P/yAe7vuPt9+n3fhQu5YZ/gGmVTBeN9i0YgAAAABJRU5ErkJggg=="} />

        </div>
    )

}

export default Add_stories;