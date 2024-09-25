<template>
    <div class="relative">
        <div class="flex justify-center items-center">
            <div class="box-content w-full sm:w-2/3 text-center">
                <p class="ml-1 pl-5 sm:ml-4 sm:pl-40 text-left font-semibold mt-4">Câu hỏi:</p>
                <p 
                    class="w-5/6 sm:w-2/3 mt-4 px-5 py-3 mx-auto border border-base-content rounded-lg bg-base-300 text-left drop-shadow-lg shadow-inner"
                >
                    {{ question }}
                </p>

                <div class="flex justify-between items-end mx-6 sm:mx-44 mt-4">
                    <p class="font-semibold">Câu trả lời của bạn:</p>
                    <p>{{ wordCount }}/250</p>
                </div>
                <textarea 
                    class="textarea w-5/6 sm:w-2/3 text-md sm:text-md mt-2 px-3 pb-96 pt-4 rounded-xl drop-shadow-xl shadow-inner border-2 border-base-200 focus:border-base-content focus:outline-none"
                    required
                    placeholder="Nhập câu trả lời của bạn..."
                    v-model="answer"
                ></textarea>

                <button 
                    class="btn btn-wide btn-md btn-accent px-12 sm:w-2/5 sm:px-20 py-2 sm:py-3 mt-4 mb-14 font-bold rounded-xl drop-shadow-xl shadow-xl"
                    @click="checkAnswer"
                    :disabled="loading"
                >
                    {{ loading ? 'Đang chấm điểm...' : 'Chấm điểm' }}
                </button>
            </div>
        </div>

        <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-secondary z-50">
            <div class="text-center text-secondary-content">
                <p class="text-lg sm:text-xl font-bold">Chờ một chút nhe, đang chấm nè...</p>
                <svg class="animate-spin h-10 w-10 mt-4 mx-auto text-secondary-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
            </div>
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
            loading: false,
        };
    },
    methods: {
    async checkAnswer() {
        const wordCount = this.answer.trim().split(/\s+/).filter(word => word.length > 0).length;

        if (this.answer === '') {
            alert('Bạn chưa nhập câu trả lời!');
        } else if (wordCount < 200) {
            alert('Đoạn văn này chưa phù hợp để chấm điểm. Vui lòng nhập ít nhất 240 từ.');
        } else {
            this.loading = true;
            setTimeout(async () => {
                const openai = new OpenAI({
                    apiKey: process.env.VUE_APP_OPENAI_API_KEY,
                    dangerouslyAllowBrowser: true,
                });

                const prompt = `
                You are an expert evaluator for IELTS Writing Task 2. The prompt provided is "${this.question}" and you are assessing the response "${this.answer}".
                Below are the criteria for the scope and accuracy of the 4 criteria in the IELTS Writing section:
                1.Task Achievement (TA) - Answering the Prompt:
                -Band 9.0: Fully addresses all parts with insightful ideas and highly relevant examples.
                -Band 8.5: Effectively addresses all parts; ideas are clear and well-supported with minor gaps.
                -Band 8.0: Addresses all parts with clear ideas and good support; minor details may be missing.
                -Band 7.5: Mostly addresses the task well with logical ideas, but some may lack detail or clarity.
                -Band 7.0: Covers the task with relevant ideas, but lacks clarity or completeness in parts.
                -Band 6.5: Addresses the task, but ideas are underdeveloped or partially relevant.
                -Band 6.0: Answers the task but with limited development or clarity; some irrelevant points.
                -Band 5.5: Attempts the task but has many unclear or incomplete ideas; some may be off-topic.
                -Band 5.0: Limited response to the task with significant irrelevant or undeveloped ideas.
                2.Coherence and Cohesion (CC) - Logical Flow and Connections:
                -Band 9.0: Skillful use of cohesive devices with logical flow; easy to follow.
                -Band 8.5: Mostly skillful with linking; minor lapses in flow or clarity.
                -Band 8.0: Generally well-organized; cohesive devices used effectively with minor issues.
                -Band 7.5: Good use of linking words; minor problems with organization or clarity.
                -Band 7.0: Satisfactory cohesion but occasional lapses in structure or linking.
                -Band 6.5: Some cohesion; lacks smooth flow or consistent structure.
                -Band 6.0: Uses linking words but not always effectively; can be hard to follow at times.
                -Band 5.5: Limited cohesion; frequent lapses in organization make it difficult to follow.
                -Band 5.0: Poor cohesion; hard to follow due to weak organization or linking.
                3.Lexical Resource (LR) - Vocabulary Range and Accuracy:
                -Band 9.0: Wide and precise vocabulary with no errors.
                -Band 8.5: Strong range, very few minor errors.
                -Band 8.0: Good range with few minor errors.
                -Band 7.5: Adequate range with occasional inaccuracies.
                -Band 7.0: Sufficient range with some mistakes.
                -Band 6.5: Limited but adequate vocabulary; noticeable errors.
                -Band 6.0: Sufficient vocabulary but with frequent errors.
                -Band 5.5: Limited vocabulary with many errors.
                -Band 5.0: Very basic vocabulary with frequent mistakes affecting understanding.
                4.Grammatical Range and Accuracy (GRA) - Grammar:
                -Band 9.0: Varied structures with full accuracy.
                -Band 8.5: Wide range, mostly accurate with minor errors.
                -Band 8.0: Good range with some minor errors.
                -Band 7.5: Reasonable range with occasional mistakes.
                -Band 7.0: Some variety; noticeable errors.
                -Band 6.5: Limited range; frequent but generally understandable errors.
                -Band 6.0: Limited structures with noticeable errors affecting understanding.
                -Band 5.5: Basic structures with frequent errors that affect understanding.
                -Band 5.0: Very basic grammar with many serious errors making text hard to understand.

                Consider whether the essay meets the word count requirement when assessing the score. Writing fewer than 250 words should have lower band scores.

                Example of Errors: 
                Error Start
                "He has a high knowledge of history" -> "He has a deep knowledge of history": Cụm từ "Deep knowledge" chính xác hơn, thể hiện sự hiểu biết sâu sắc hơn.
                "She don’t like coffee" -> "She doesn’t like coffee": Câu chủ ngữ "she" yêu cầu động từ "doesn't," chứ không phải "don't".
                "We should do an effort to help" -> "We should make an effort to help": Câu đúng là "Make an effort," không phải "do an effort".
                "Firstly, technology is helpful. Secondly, it is fast" -> "Firstly, technology is helpful because it saves time; moreover, it is fast and efficient": Việc thêm các từ liên kết và chi tiết giúp câu trở nên mạch lạc hơn.
                Task prompt requires: "Discuss advantages and disadvantages.": Chỉ thảo luận về các lợi ích -> Cần thảo luận cả lợi ích và bất lợi.
                Error End

                Provide scores and comments for the range and accuracy of the 4 criteria in the following format:

                Task Achievement (TA): (score rounded to the nearest 0.5, scored 1 band lower) - (nhận xét chi tiết cụ thể, giải thích tại sao bài làm lại được band điểm như vậy, đưa ra giải pháp để nâng band điểm bằng tiếng việt, cho thêm ví dụ cải thiện)
                Coherence and Cohesion (CC): (score rounded to the nearest 0.5, scored 1 band lower) - (nhận xét chi tiết cụ thể, giải thích tại sao bài làm lại được band điểm như vậy, đưa ra giải pháp để nâng band điểm bằng tiếng việt, cho thêm ví dụ cải thiện)
                Lexical Resource (LR): (score rounded to the nearest 0.5, scored 1 band lower) - (nhận xét chi tiết cụ thể, giải thích tại sao bài làm lại được band điểm như vậy, đưa ra giải pháp để nâng band điểm bằng tiếng việt, cho thêm ví dụ cải thiện)
                Grammatical Range and Accuracy (GRA): (score rounded to the nearest 0.5, scored 1 band lower) - (nhận xét chi tiết cụ thể, giải thích tại sao bài làm lại được band điểm như vậy, đưa ra giải pháp để nâng band điểm bằng tiếng việt, cho thêm ví dụ cải thiện)
                Overall Band: (score average of all 4 criteria, rounded to the nearest 0.5) 
                Nhận xét tổng thể: (đưa lời khuyên chính xác tổng quát cho bài làm, nêu ra những hạn chế và ưu điểm của bài làm,... bằng tiếng việt)

                (Error Start)
                (Original error sentence - 1st sentence) -> (Correct sentence): (Giải thích lỗi cụ thể, tại sao lại có lỗi sai này, đưa ra dẫn chứng và chữa lại cho chính xác bằng tiếng việt).\n
                (Original error sentence - 2nd sentence) -> (Correct sentence): (Giải thích lỗi cụ thể, tại sao lại có lỗi sai này, đưa ra dẫn chứng và chữa lại cho chính xác bằng tiếng việt).\n
                (Original error sentence - 3rd sentence) -> (Correct sentence): (Giải thích lỗi cụ thể, tại sao lại có lỗi sai này, đưa ra dẫn chứng và chữa lại cho chính xác bằng tiếng việt).\n 
                (Error End)

                Focus particularly on the 4 criteria in Writing. Avoid using additional symbols or numbers (#, *, 1, 2, 3,…) and don't call words in ().
                `; 
                try {
                    const completion = await openai.chat.completions.create({
                    messages: [{ role: 'user', content: prompt }],
                    model: 'gpt-4o-mini',
                    });

                    const resultText = completion.choices[0].message.content;
                    console.log('API Response:', resultText);

                    const resultObjects = this.parseResultText(resultText);
                    this.$router.push({
                        path: '/result',
                        query: { 
                            question: this.question,
                            userAnswer: this.answer,
                            resultObjects: JSON.stringify(resultObjects)
                        },
                    });
                } catch (error) {
                    // console.error(error);
                    console.error('Error details:', error);
                    alert('Đã xảy ra lỗi khi gọi API.');
                } finally {
                    this.loading = false;
                }
            }, 1000);
        }
    },

    parseResultText(resultText) {
        const resultObjects = {
            taskAchievement: {},
            coherenceCohesion: {},
            lexicalResource: {},
            grammaticalRangeAccuracy: {},
            overallBand: {},
            overallComment: '',
            errors: [],
        };

        const lines = resultText.split('\n').filter((line) => line.trim() !== '');

        lines.forEach((line) => {
            if (line.includes('Task Achievement')) {
                const rest = line.split(':')[1];
                const [score, comment] = rest.split(' - ');
                resultObjects.taskAchievement = { score: score.trim(), comment: comment.trim() };
            } else if (line.includes('Coherence and Cohesion')) {
                const rest = line.split(':')[1];
                const [score, comment] = rest.split(' - ');
                resultObjects.coherenceCohesion = { score: score.trim(), comment: comment.trim() };
            } else if (line.includes('Lexical Resource')) {
                const rest = line.split(':')[1];
                const [score, comment] = rest.split(' - ');
                resultObjects.lexicalResource = { score: score.trim(), comment: comment.trim() };
            } else if (line.includes('Grammatical Range and Accuracy')) {
                const rest = line.split(':')[1];
                const [score, comment] = rest.split(' - ');
                resultObjects.grammaticalRangeAccuracy = { score: score.trim(), comment: comment.trim() };
            } else if (line.includes('Overall Band')) {
                const rest = line.split(':')[1];
                resultObjects.overallBand = { score: rest.trim() };
            } else if (line.includes('Nhận xét tổng thể')) {
                resultObjects.overallComment = line.split(':')[1].trim();
            } else if (line.includes('(Error Start)')) {
                const errorStartIndex = lines.indexOf(line) + 1;
                const errorEndIndex = lines.findIndex((line) => line.includes('(Error End)'));
                const errorLines = lines.slice(errorStartIndex, errorEndIndex);
                resultObjects.errors = errorLines.map((error) => error.trim());
            }
        });
            return resultObjects;
            
        },
    },

    computed: {
        wordCount() {
            return this.answer.trim().split(/\s+/).filter(word => word.length > 0).length;
        }
    }
};
</script>

<style scoped>
button {
    transition: background-color 0.3s ease;
}
button.hover {
    background-color: #86efac;
}

.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}
</style>
