import React from 'react'
import PhoneInput from 'react-phone-input-2'
import Premiumicon from '../components/Icons/premiumicon';
import ProfilePicture from '../components/images/profile.png'

const Profile = () => {
    const [mobphone, setmobPhone] = React.useState("+9239699999");
    const handleChangeMob = (newPhone) => {
        setmobPhone(newPhone);
    };
    const [landline, setlandline] = React.useState("+9239699999");
    const handleChangelandline = (newPhone) => {
        setlandline(newPhone);
    };
    return (
        <div className='profile-setting-detail d-flex justify-content-center align-items-center'>
            <div className='w-75 width-div'>
                <div className='d-flex flex-xl-row flex-column justify-content-between align-items-xl-center'>
                    <div className='d-flex flex-sm-row flex-column justify-between mb-xl-0 mb-4 align-items-sm-center align-items-start
                    '>
                        <img src={ProfilePicture} />
                        <div className='pl-sm-3 mt-sm-0 mt-2'>
                            <h3 className='pb-2 font-24 font-weight-700 text-light-black'>RC Real Estate Pty Ltd</h3>
                            <p className='pb-3 font-18 font-weight-400 text-grey'>company@email.com</p>
                            <button className='premium-btn font-12 font-weight-600'> <Premiumicon /><span className='pl-1'>Premium User</span></button>
                        </div>
                    </div>
                    <div>
                        <label className='cr-p' htmlFor='changepicture'>
                            <input type='file' className='d-none' id='changepicture' />
                            <p className='font-16 font-weight-600 pb-2 text-light-black'>
                                Change Picture
                            </p>
                            <button className='btn-brown-outline'>Upload Picture</button>
                        </label>

                    </div>
                </div>
                <div className='horizontal-line'></div>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                        <div className="d-flex flex-column mb-4 w-100 mr-md-4">
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="name">
                                Company Name
                            </label>
                            <input type="text" required placeholder='RC Real Estate Pty LTD' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                        </div>
                        <div className="d-flex flex-column mb-4 w-100">
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="email">
                                Email
                            </label>
                            <input required type='email' placeholder='Company@email.com' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                        </div>
                    </div>
                    <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                        <div className="d-flex flex-column mb-4  w-100 mr-md-4">
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="mobile">
                                Mobile
                            </label>
                            <PhoneInput
                                onChange={(mobphone) => handleChangeMob(mobphone)}
                                specialLabel={""}
                                disableDropdown={false}
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                    autoFocus: true,
                                }}
                                inputClass="form-control h-48px form-control border-grey p-input-style font-16 w-100"
                            />                    </div>
                        <div className="d-flex flex-column mb-4 w-100">
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="landline">
                                Land Line
                            </label>
                            <PhoneInput
                                onChange={(landline) => handleChangelandline(landline)}
                                specialLabel={""}
                                disableDropdown={false}
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                    autoFocus: true,
                                }}
                                inputClass="form-control h-48px form-control border-grey p-input-style font-16 w-100"
                            />
                        </div>
                    </div>
                    <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                        <div className="d-flex flex-column mb-4 w-100 mr-md-4">
                            <div className='selectdiv'>
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="email">
                                    Country
                                </label>
                                <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>UAE</option>
                                </select>                    </div>
                        </div>
                        <div className="d-flex flex-column mb-4 w-100">
                            <div className='selectdiv'>
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="email">
                                    City
                                </label>
                                <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>Dubai</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column mb-5">
                        <label
                            className="font-16 font-weight-600 pb-2 "
                            htmlFor="address">
                            Address
                        </label>
                        <input required type="text" placeholder='Enter address' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                    </div>
                    <div className="justify-content-between align-items-start flex-md-row flex-column d-flex align-items-md-center ">
                        <label className="custom-checkbox mb-md-0 mb-4 d-flex align-items-center ">
                            <span className="pl-2 text-light-black font-weight-400">
                                Update details in all property listings
                            </span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <button className='btn-brown-bg' type='submit'>
                            Save Changes
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Profile


