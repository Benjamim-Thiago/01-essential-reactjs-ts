import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import backgroundTop from '../../assets/sidebar-background-top.png'
import { Avatar } from '../avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={backgroundTop} />
      <div className={styles.profile}>
        <Avatar 
          src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png" 
          alt="" />
        <strong>BenjamimThiago</strong>
        <span>Web Developer</span>
      </div>  

      <footer>
        <a href="#">
          <PencilLine size={20} /> 
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}