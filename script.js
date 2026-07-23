document.addEventListener('DOMContentLoaded', function() {
    const comfortMessages = [
        "오늘 하루도 정말 고생 많았어요. 잠시 어깨에 힘을 빼볼까요? 🌸",
        "완벽하지 않아도 괜찮아요. 지금 그대로도 충분히 멋지답니다. 🍀",
        "마음이 힘들 땐 억지로 웃지 않아도 돼요. 잠시 쉬어가도 좋습니다. ☕",
        "당신은 당신이 생각하는 것보다 훨씬 더 강하고 단단한 사람이에요. 🌟",
        "깊게 숨을 들이마시고, 천천히 내쉬어보세요. 다 괜찮아질 거예요. 🍃",
        "힘든 순간에도 잊지 마세요. 당신의 존재 자체로 빛이 난다는 것을 ✨",
        "조금은 서툴러도 괜찮아요. 모든 과정이 당신을 더 단단하게 만들 거예요. 🌱",
        "당신의 하루가 평화와 따뜻함으로 가득하길 바라요. 걱정은 잠시 내려놓아요. 🌙"
    ];

    const weddingKeywords = ["결혼", "웨딩", "상견례", "혼수", "예랑", "예신", "결혼식"];
    const familyKeywords = ["부모님", "엄마", "아빠", "가족", "시댁", "처가"];

    function getComfortMessage(userFeeling) {
        if (!userFeeling || userFeeling.trim() === "") {
            const randomMsg = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
            return `오늘 하루 어떠셨나요?\n\n${randomMsg}`;
        }

        const feelingText = userFeeling.trim().replace(/\s+/g, "");
        const hasWedding = weddingKeywords.some(k => feelingText.includes(k));
        const hasFamily = familyKeywords.some(k => feelingText.includes(k));

        // 1. 결혼 관련
        if (hasWedding && hasFamily) {
            return "결혼 준비와 가족 문제가 겹쳐서 마음이 천근만근 무거우시겠어요. 😢 인생의 큰 전환점에서 가장 가까운 사람들과 부딪히는 건 누구에게나 숨 막히는 일입니다. 모든 사람을 만족시킬 수는 없어요. 지금 가장 중요한 건 '당신의 마음'입니다. 잠시 무거운 짐을 내려놓고 온전히 스스로를 다독이는 시간을 가져보세요. 다 지나갈 거예요. 🌸";
        } else if (hasWedding) {
            return "결혼 문제로 고민이 참 많으시군요. 서로 다른 환경에서 자란 두 세계가 맞춰가는 과정은 정말 험난한 여정이죠. 내 마음처럼 되지 않아 답답하고 때론 외로울 수 있어요. 하지만 완벽하지 않아도 괜찮습니다. 지금 충분히 잘 헤쳐나가고 있으니, 너무 자책하지 마시고 따뜻한 차 한잔과 함께 크게 심호흡 한 번 해보세요. 🌿";
        } else if (hasFamily) {
            return "가족 문제로 마음고생이 많으시군요. 가장 가깝기에 상처도 더 깊게 다가오고, 내 맘 같지 않아 서운할 때가 많죠. 가족이라는 이유로 무조건 참고 희생해야 하는 건 아니랍니다. 당신의 감정과 경계선도 소중하게 존중받아야 해요. 오늘은 다른 누구보다 스스로의 마음을 먼저 꼭 안아주세요. 당신은 소중한 사람입니다. 🍀";
        } 
        
        // 2. 키워드는 없지만 짧은 한탄이거나 감정 표현일 때 (인용구 삭제 및 자연스러운 공감 적용)
        else {
            const randomMsg = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
            
            // 입력 내용이 너무 짧거나(10글자 미만) ㅠㅠ, 힘들어 등의 단어가 포함된 경우 그대로 인용하지 않고 공감형 문구 출력
            if (userFeeling.length < 15 || userFeeling.includes("힘들") || userFeeling.includes("지쳐") || userFeeling.includes("ㅠㅠ") || userFeeling.includes("ㅜㅜ")) {
                return `마음이 많이 지치고 버거우신가요? 그 마음 다 알 수는 없겠지만, 곁에서 조용히 토닥여드리고 싶어요.\n\n${randomMsg}`;
            } else {
                // 글 내용이 어느 정도 길고 구체적인 사연일 때만 부드럽게 수용
                return `마음속에 담아두었던 이야기가 참 무거웠겠어요. 털어놓아 주셔서 고마워요.\n\n${randomMsg}`;
            }
        }
    }

    const submitBtn = document.getElementById('submitBtn');
    const userInput = document.getElementById('userInput');
    const outputMsg = document.getElementById('outputMsg');

    if (submitBtn && userInput && outputMsg) {
        submitBtn.addEventListener('click', function() {
            const resultMsg = getComfortMessage(userInput.value);
            outputMsg.value = resultMsg;
        });
    }
});
