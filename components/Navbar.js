import Link from 'next/link';
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <main className = { styles.main }>
  <aside className = { styles.sidebar }>
    <nav className = { styles.nav }>
      <ul>
        <Link className = { styles.active }href="/" ><a>🏠 Home</a></Link> 
        {/* <Link className = { styles.active }href="/livestream" ><a>📡 Livestream</a></Link>  */}
        <Link className = { styles.active }href="/onDemand" ><a>📼 OnDemand</a></Link> 
        {/* <Link className = { styles.active }href="/mint" ><a>🖼 Mint NFT</a></Link>  */}
      </ul>
    </nav>
  </aside>
</main>
    
  )
}