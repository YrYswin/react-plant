import React, { useState } from 'react'

import styles from './FullPlantPage.module.scss'

export const Description = () => {
  const [contentType, setContentType] = useState(true)

  function changeContentType(type: boolean) {
    setContentType(type)
  }

  return (
    <div className={styles.itemDescriptions} >
      <div className={styles.pages} >
        <div
          onClick={() => changeContentType(true)}
          className={contentType ? styles.active : ''}
        >
          Product Description
        </div>
        <div
          onClick={() => changeContentType(false)}
          className={!contentType ? styles.active : ''}
        >
          Review (12)
        </div>
      </div >
      {
        contentType ?
          <div className={styles.descriptions}>
            <p>
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam fringilla augue nec est tristique auctor.Donec non est at libero vulputate rutrum.Morbi ornare lectus quis justo gravida semper.Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.

              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit.Donec ac tempus ante.Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Cras neque metus, consequat et blandit et, luctus a nunc.Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
            </p >
            <h5>Living Room:</h5>
            <p>
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h5>Dining Room:</h5>
            <p>
              The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.
            </p>
            <h5>Office:</h5>
            <p>
              The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.
            </p>
          </div > : <div>Review</div>
      }
    </div >
  )
}