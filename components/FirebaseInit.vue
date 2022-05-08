
<script>
    import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
    import firedb from '~/plugins/firebase.client';

    export default {
        data() {
            return {
                skills: []
            }
        },
        methods: {
            async getSkills() {
                try {
                    const querySnapshot = await getDocs(collection(firedb, "Skills"));
                    querySnapshot.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data()}`);
                    });
                }
                catch (e){
                    console.error('error while getting document : ', e);
                }
            },
            async setSkills() {
                try {
                    await addDoc(collection(firedb, "Skills"), {
                        name: "PHP",
                        level: 4,
                        type: "Backend"
                    });
                }
                catch (e) {
                    console.error("error while setting document : ", e);
                }
            },
        },
        mounted()  {
            try { 
                //const db = getFirestore(firebaseApp);
                
                //this.setSkills();
                //this.getSkills();
            }
            catch(e) {
                console.log("error", e);
            }
        },
    }
</script>

<template>
  <div>Hello FireBase</div>
</template>