import React from "react";
import firebase from "../../Config/Firebase/Firebase"
import {NevBar} from "../../Components/Index"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            array: [],
            user:''

        }   }





        // componentDidMount(){
        //     let array = []
        // firebase.firestore().collection('allUsers').get().then(res=>{
        //     console.log('component',res)
        //     res.forEach(UserDetails=>{
        //         let UserData= UserDetails.data()
        //         array.push(UserData)
        //         this.setState({array})
        //     })
        // })
        // }




    componentDidMount() {
        firebase.auth().onAuthStateChanged(user=> {
            if (user) {
                firebase.firestore().collection('AllUsers').doc(user.uid).get().then(res => {
                    console.log (res.data())
                    this.setState({
                        user: res.data()
                    })
                })
            }
        })
    }
    render() {
        console.log("Homeee========>", this.state.user)

        return (
            <div>
                <NevBar data={this.state.user} />
                {/* <Drawer/> */}



                <h2>Home</h2>
                {/* {data.map((val, i) => <h1 key={i}>{val.email}</h1>)} */}
            </div>

        )
    }
}

// const mapStateToProps = state => {
//     console.log("======>jjjhhjhjhjhh",state.userData.name)
//     return {
//         userData: state.userData.name
//     }
// }


// const mapDispatchToProps = dispatch => {
//     return {
//         addData: (data) => dispatch(addData(data))
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Home);


export default Home;