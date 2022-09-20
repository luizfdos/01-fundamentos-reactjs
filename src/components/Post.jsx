import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/luizfdos.png"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Luiz Fernando</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="19 de Setembro 2022 às 20:55"
          dateTime="2022-09-19 20:55:00"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
