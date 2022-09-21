import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/luizfdos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>LuizFDOS</strong>

              <time
                title="19 de Setembro 2022 às 20:55"
                dateTime="2022-09-19 20:55:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Luiz, parabéns 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Apaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
