import S from "./doados.module.scss"
import livrored from "../../assets/livrodoado.png"



export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Doados Livros</h2>
            <section className={S.boxcard}>
                <article>
                    <img src={livrored} alt="" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}