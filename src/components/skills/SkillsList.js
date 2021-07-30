import React from 'react'
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import LaptopRoundedIcon from '@material-ui/icons/LaptopRounded'
import LocalPhoneRoundedIcon from '@material-ui/icons/LocalPhoneRounded'
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import TabletRoundedIcon from '@material-ui/icons/TabletRounded'
import WbIncandescentRoundedIcon from '@material-ui/icons/WbIncandescentRounded'
import BuildRoundedIcon from '@material-ui/icons/BuildRounded'
import ArtTrackRoundedIcon from '@material-ui/icons/ArtTrackRounded'

const SkillsList = () => {
  return (
    <div>
      <div>
        <section>
          <div>
            <div>
              <LocalPhoneRoundedIcon />
              <ArtTrackRoundedIcon />
            </div>
            <h1>Research</h1>
          </div>
        </section>

        <section>
          <div>
            <div>
              <WbIncandescentRoundedIcon />
            </div>
            <h1>Ideation</h1>
          </div>
        </section>

        <section>
          <div>
            <div>
              <LaptopRoundedIcon />
              <PhoneIphoneRoundedIcon />
              <TabletRoundedIcon />
            </div>
            <h1>Mockups & Prototyping</h1>
          </div>
        </section>

        <section>
          <div>
            <div>
              <SettingsRoundedIcon />
              <BuildRoundedIcon />
            </div>
            <h1>Development</h1>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SkillsList




