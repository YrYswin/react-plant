import React from 'react'
import { useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'

import { emailValidation } from '../Authorization/validation'

import styles from './AccountParams.module.scss'
import { selectProfileData } from '../../redux/profile/slice'
import { profileDataState } from '../../redux/profile/types'

export const UserDetails: React.FC = () => {
  const profile = useSelector(selectProfileData)
  const { control, handleSubmit } = useForm<profileDataState>()
  const [formData, setFormData] = React.useState<profileDataState | undefined>(undefined)

  React.useEffect(() => {
    if (profile) {
      setFormData(prevState => ({
        ...prevState!,
        email: profile.email,
        name: profile.name,

      }));
    }
  }, [profile]);

  const onChangeProfileData = (data: profileDataState) => {
    console.log(data)
  }

  return (
    <div className={styles.accountDetails}>
      <div className={styles.personalInfo}>
        <h2>Personal Information</h2>

        <form className={styles.personInputs} onSubmit={handleSubmit(onChangeProfileData)}>
          <Controller
            control={control}
            name="firstName"
            render={(() => (
              <div className={styles.personInput}>
                <label htmlFor="firstName">First Name *</label>
                <input
                  name="firstName" id='firstName'
                  autoComplete="name"
                  value={'your first name'}
                  readOnly
                />
              </div>
            ))}
          />

          <Controller
            control={control}
            name='lastName'
            render={(() => (
              <div className={styles.personInput}>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  name="lastName" id='lastName'
                  autoComplete='email'
                  value={'your last name'}
                  readOnly
                />
              </div>
            ))}
          />

          <Controller
            control={control}
            rules={emailValidation}
            name='email'
            render={(({ field }) => (
              <div className={styles.personInput}>
                <label htmlFor="email">Email address *</label>
                <input
                  name="email" id='email' type="email"
                  value={formData?.email || ''}
                  onChange={(e) => field.onChange(e)}
                  autoComplete='email'
                  readOnly
                />
              </div>
            ))}
          />

          <div className={styles.personInput}>
            <label htmlFor="number-phone">Phone Number *</label>
            <div className={styles.number}>
              <select name="number" id="number">
                <option value="rus">+8</option>
                <option value="kgs">+996</option>
                <option value="kgz">+123</option>
              </select>
              <input type="number" name="number-phone" id="number-phone" />
            </div>
          </div>

          <Controller
            control={control}
            name='name'
            render={(({ field }) => (
              <div className={styles.personInput}>
                <label htmlFor="name">Username *</label>
                <input
                  name="name" id='name'
                  onChange={(event) => field.onChange(event)}
                  autoComplete='name'
                  value={formData?.name !== undefined ? formData?.name : ''}
                  readOnly
                />
              </div>
            ))}
          />

          <div className={styles.personInput}>
            <p>Photo</p>
            <div className={styles.avatarChange}>
              <div className={styles.imgChange}>
                <img src='' alt="avatar" />
              </div>

              <div className={styles.changeImgBtn}>
                <button type='submit' className={styles.change}>Change</button>
                <button className={styles.remove}>Remove</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.passwordChanged}>
        <h2>Password Changed</h2>

        <div className={styles.passwordInputs}>
          <div className={styles.passwordInput}>
            <label htmlFor="password">Current password</label>
            <input type="password" name="password" id="password" />
          </div>

          <div className={styles.passwordInput}>
            <label htmlFor="new-password">New password</label>
            <input type="password" name="new-password" id="new-password" />
          </div>

          <div className={styles.passwordInput}>
            <label htmlFor="try-new-password">Confirm new password</label>
            <input type="password" name="try-new-password" id="try-new-password" />
          </div>

          <div className={styles.saveBtn}>
            <button>Save Change</button>
          </div>
        </div>
      </div>
    </div>
  )
}