<template>
    <div class="mt-10">
        <h1 class="text-4xl font-bold my-10">Kết Quả Của Bạn!</h1>
        <div v-if="resultObject">
            <div class="flex flex-row items-center">
                <div class="basis-1/6">
                    <p>Overall Band Score:</p>
                    <h1 class="text-6xl text-green-600"><strong>{{ resultObject.overallBandScore }}</strong></h1>
                </div>

                <p class="basis-1/2 px-5 py-3 mx-auto border-2 border-gray-600 rounded-lg bg-slate-200 text-left">
                    {{ userAnswer }}
                </p>
                <div class="basis-1/3 mx-5 flex flex-col items-center justify-center">
                    <div class="custom-div">
                        <p class="bg-orange-400"><strong>Trả lời đùng câu hỏi đề bài:</strong> {{ resultObject.taskAchievement }}</p>
                    </div>
                    <div class="custom-div">
                        <p class="bg-yellow-400"><strong>Mạch lạc và liên kết:</strong> {{ resultObject.coherenceAndCohesion }}</p>
                    </div>
                    <div class="custom-div">
                        <p class="bg-sky-400"><strong>Từ vựng:</strong> {{ resultObject.lexicalResource }}</p>
                    </div>
                    <div class="custom-div">
                        <p class="bg-purple-400"><strong>Ngữ pháp:</strong> {{ resultObject.grammaticalRangeAndAccuracy }}</p>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <h2 class="font-semibold">{{ resultObject.comment }}</h2>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultPage',
    data() {
        return {
            resultObject: null,
            userAnswer: this.$route.query.userAnswer || '',
        }
    },
    mounted() {
        this.processResult(this.$route.query.resultText);
    },
    methods: {
        processResult(result) {
            const resultLines = result.split('\n').filter(line => line.trim() !== '');
            let resultObject = {};
            resultLines.forEach(line => {
                if (line.includes('Task Achievement:')) {
                    resultObject.taskAchievement = line.replace('Task Achievement:', '').trim();
                } else if (line.includes('Coherence and Cohesion:')) {
                    resultObject.coherenceAndCohesion = line.replace('Coherence and Cohesion:', '').trim();
                } else if (line.includes('Lexical Resource:')) {
                    resultObject.lexicalResource = line.replace('Lexical Resource:', '').trim();
                } else if (line.includes('Grammatical Range and Accuracy:')) {
                    resultObject.grammaticalRangeAndAccuracy = line.replace('Grammatical Range and Accuracy:', '').trim();
                } else if (line.includes('Overall Band Score:')) {
                    resultObject.overallBandScore = line.replace('Overall Band Score:', '').trim();
                } else {
                    resultObject.comment = line.trim();
                }
            });
            this.resultObject = resultObject;
            console.log(resultObject)
        }
    }
}
</script>

<style scoped>

h2 {
    margin-bottom: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    padding-left: 16px;
    padding-right: 16px;
}

.custom-div {
    width: 80%;
    text-align: center;
}

</style>
