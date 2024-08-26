<template>
    <div class="flex justify-center items-center">
        <div class="box-content w-2/3 mt-2 text-center">
            <p class="ml-4 pl-40 text-left font-semibold mt-4">Câu hỏi:</p>
            <p 
            class="mt-4 w-2/3 px-5 py-3 mx-auto border-2 border-gray-600 rounded-lg bg-slate-200 text-left"
            style="white-space: pre-wrap; overflow-wrap: break-word; word-break: break-word;"
            >
            {{ question }}
            </p>

            <div class="flex justify-between items-end mx-44 mt-4">
                <p class="font-semibold">Câu trả lời của bạn:</p>
                <p>{{ wordCount }}/250</p>
            </div>
            <textarea 
            class="w-2/3 mt-2 px-3 pb-96 pt-4 rounded-xl border-2 border-gray-400 focus:border-gray-800 focus:outline-none"
            required
            placeholder="Nhập câu trả lời của bạn..."
            v-model="answer"
            ></textarea>

            <button 
            :class="{'bg-lime-300': answer === '', 'bg-lime-500': answer !== '', 'hover:bg-lime-600': answer !== ''}"
            class="bg-lime-300 px-32 py-3 mt-4 font-bold rounded-xl"
            @click="checkAnswer"
            >Chấm điểm</button>
        </div>
    </div>
</template>

<script>
import OpenAI from 'openai';
export default {
    name: 'WritingPage',

    data() {
        return {
            answer: '',
            question: this.$route.query.question || '',
            displayText: '',
            displayTextArray: [],
        }
    },
    methods: {
        async checkAnswer() {
            if (this.answer === '') {
                alert('Bạn chưa nhập câu trả lời!')
            } else {
                const openai = new OpenAI({
                    apiKey: process.env.VUE_APP_OPENAI_API_KEY,
                    dangerouslyAllowBrowser: true
                });

                const prmopt = `Bạn đang là một giáo viên chấm ielts writing task 2. Đề bài và bài làm ở phía dưới. Hãy chấm điểm bài làm theo 4 tiêu chí sau: 
                Trả lời đúng câu hỏi đề bài,
                Mạch lạc và liên kết,
                Từ vựng,
                Ngữ pháp,
                rồi hiển thị điểm của từng tiêu chí ra màn hình. 
                Hãy đưa Overall Band Score (đã làm tròn) ra màn hình. 
                Đưa ra nhận xét tổng quát cho bài làm bằng tiếng việt, chỉ ra các lỗi sai trong bài làm và đưa ra những chỉnh sửa trong phần 
                nhận xét.
                Đề bài là "${this.question}" 
                Bài làm: "${this.answer}"`

                try {
                    const completion = await openai.chat.completions.create({
                        messages: [
                            { role: "user", content: prmopt },
                        ],
                        model: "gpt-4o-mini"
                    });
                    const resultText = completion.choices[0].message.content;
                    this.$router.push({
                        path: '/result',
                        query: { userAnswer: this.answer, resultText: resultText }
                    });
                } catch (error) {
                    console.error(error);
                    alert("Đã xảy ra lỗi khi gọi API.");
                }
            }
        }
    },
    computed: {
        wordCount() {
            return this.answer.trim().split(/\s+/).filter(word => word.length > 0).length;
        }
    }
}
</script>

<style scoped>
    button {
    transition: background-color 0.3s ease
    }
    button.hover {
        background-color: #86efac;
    }
</style>