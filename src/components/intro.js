import React from "react"
import styled from "styled-components"

const Intro = () => {
  const Heading = styled.h2`
    font-size: 5vh;
  `

  const Desc = styled.p`
    font-size: 3vh;
  `
  return (
    <div>
      <Heading>
        Halo, saya Ananda Muhammad Muthaqin, bisa dipanggil Handa{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </Heading>
      <Desc>
        suka menulis dan bikin-bikin. Seorang Front-end developer dan juga
        JavaScript lover🧡. Disini bisa baca blog atau sekedar melihat{" "}
        <a style={{ color: `#6C63FF` }} href="https://github.com/handa26">
          project saya 💻
        </a>
      </Desc>
      <Desc>
        <a
          style={{ color: `#6C63FF`, marginRight: `5px` }}
          href="https://twitter.com/_handa26"
        >
          Tweet/
        </a>
        <a
          style={{ color: `#6C63FF`, marginRight: `5px` }}
          href="https://www.instagram.com/_anandamuhammad"
        >
          IG/
        </a>
        <a
          style={{ color: `#6C63FF` }}
          href="mailto: anandamuhammadmtq@gmail.com"
        >
          Email
        </a>
      </Desc>
    </div>
  )
}

export default Intro
