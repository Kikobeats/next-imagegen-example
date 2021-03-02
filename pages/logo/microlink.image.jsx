import styles from './logo.module.css'

export default function MicrolinkImage() {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="31"><g fill="none"><path fill="#EA407B" d="M38.462.209H18.587c-2.879 0-5.221 2.214-5.221 4.935V7.66h3.3V5.144c0-.895.862-1.622 1.921-1.622h19.875c1.06 0 1.921.728 1.921 1.622V17.22c0 .894-.862 1.621-1.92 1.621H18.586c-1.06 0-1.922-.727-1.922-1.621v-3.858h-3.3v3.858c0 2.72 2.343 4.934 5.222 4.934h19.875c2.879 0 5.22-2.214 5.22-4.934V5.144c0-2.722-2.341-4.935-5.22-4.935z"/><path fill="#654EA3" d="M30.317 25.737V23.22h-3.3v2.517c0 .895-.862 1.622-1.922 1.622H5.221c-1.059 0-1.921-.728-1.921-1.622V13.66c0-.894.862-1.621 1.921-1.621h19.874c1.06 0 1.922.727 1.922 1.621v3.858h3.3V13.66c0-2.72-2.343-4.935-5.222-4.935H5.22C2.343 8.725 0 10.94 0 13.66v12.077c0 2.721 2.343 4.935 5.221 4.935h19.874c2.88 0 5.222-2.213 5.222-4.935z"/></g></svg>
        <span style={{margin: '0 8px', width: 2, height: 20, background: '#000'}} />
        <span style={{fontSize: 24, fontFamily: 'Arial, sans-serif'}}>MICROLINK</span>
      </div>
    </div>
  )
}
