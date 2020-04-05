// import React from 'react';
// import css from "./PageCover.module.scss";
//
// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//         userStatus: this.props.userStatus
//     }
//
//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateUserStatus(this.state.userStatus)
//     }
//
//     onStatusChange = (e) => {
//         this.setState({
//             userStatus: e.currentTarget.value
//         })
//     }
//
//     componentDidUpdate (prevProps, prevState) {
//         if(prevProps.userStatus != this.props.userStatus) {
//             this.setState({
//                 userStatus: this.props.userStatus
//             });
//         }
//     }
//
//     render () {
//
//         return (
//             <div className={css.profileStatus}>
//                 {!this.state.editMode &&
//                     <div>
//                         <span onClick={this.activateEditMode}>{this.props.userStatus || 'No status...'}</span>
//                     </div>
//                 }
//                 {this.state.editMode &&
//                     <div>
//                         <input autoFocus={true}
//                                onChange={this.onStatusChange}
//                                onBlur={this.deactivateEditMode}
//                                value={this.state.userStatus}
//                                type="text"/>
//                     </div>
//                 }
//             </div>
//         )
//     }
// }
//
// export default ProfileStatus;
//
