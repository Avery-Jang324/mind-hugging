document.addEventListener('DOMContentLoaded', function() {
    // 기본 위로 문구 (매칭되는 카테고리가 없을 때)
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

    // 카테고리별 키워드 + 맞춤 위로 문구 풀 (각 카테고리마다 여러 개라 매번 다르게 나옴)
    const categories = [
        {
            name: "결혼가족",
            keywords: ["결혼", "웨딩", "상견례", "혼수", "예랑", "예신", "결혼식", "부모님", "엄마", "아빠", "가족", "시댁", "처가"],
            messages: [
                "결혼과 가족 문제가 겹치면 마음이 천근만근 무거워지죠. 😢 인생의 큰 전환점에서 가까운 사람들과 부딪히는 건 누구에게나 숨 막히는 일이에요. 모든 사람을 만족시킬 순 없어요. 지금 가장 중요한 건 '당신의 마음'입니다. 🌸",
                "가족이라는 이유로 무조건 참고 희생해야 하는 건 아니랍니다. 당신의 감정과 경계선도 소중하게 존중받아야 해요. 오늘은 스스로의 마음을 먼저 꼭 안아주세요. 🍀",
                "서로 다른 환경에서 자란 사람들이 맞춰가는 과정은 원래 험난한 여정이에요. 내 마음 같지 않아 답답할 수 있지만, 지금도 충분히 잘 헤쳐나가고 있어요. 🌿"
            ]
        },
        {
            name: "직장업무",
            keywords: ["회사", "직장", "상사", "업무", "야근", "퇴사", "이직", "동료", "출근", "일이 많"],
            messages: [
                "일에 치이다 보면 나 자신을 잃어버리기 쉬워요. 오늘 하루도 버텨낸 당신, 정말 잘하고 있어요. 잠깐이라도 숨 돌릴 틈을 스스로에게 허락해주세요. 💼🌿",
                "직장에서의 인정과 나의 가치는 다른 문제예요. 상사의 말 한마디에 흔들리지 않아도 돼요. 당신은 이미 충분히 몫을 하고 있어요. ☕",
                "쉬지 않고 달려온 만큼, 잠깐 멈춰서도 괜찮아요. 번아웃은 약함이 아니라 그만큼 최선을 다했다는 증거예요. 🍃"
            ]
        },
        {
            name: "연애",
            keywords: ["연애", "남자친구", "여자친구", "썸", "짝사랑", "이별", "헤어짐", "헤어졌", "짝남", "짝녀"],
            messages: [
                "마음을 준 만큼 아픈 것도 당연해요. 그 감정을 억지로 누르지 않아도 괜찮습니다. 지금은 스스로를 다독여줄 시간이에요. 💌",
                "관계 속에서 흔들리는 건 당신이 그만큼 진심이었다는 뜻이에요. 상대의 반응에 나의 가치를 맡기지 않아도 돼요. 당신은 그 자체로 소중해요. 🌸",
                "이별이든 짝사랑이든, 지금 느끼는 아픔에는 유통기한이 있어요. 지금은 그저 스스로에게 다정해지는 연습을 해봐요. 🍀"
            ]
        },
        {
            name: "돈경제",
            keywords: ["돈", "월급", "빚", "대출", "적금", "재테크", "생활비", "카드값"],
            messages: [
                "돈 걱정은 마음까지 짓누르죠. 지금 당장 답이 안 보여도, 하루하루 버텨내는 것만으로도 충분히 잘하고 있는 거예요. 🌙",
                "숫자로 사람의 가치를 매길 순 없어요. 지금 힘든 시기를 지나고 있을 뿐, 당신의 노력은 결코 사라지지 않아요. 🌱"
            ]
        },
        {
            name: "외로움",
            keywords: ["외로", "혼자", "공허", "쓸쓸", "허전"],
            messages: [
                "혼자라는 느낌이 드는 밤엔 마음이 더 크게 울리죠. 지금 이 순간, 저라도 당신의 이야기를 듣고 있어요. 당신은 혼자가 아니에요. 🌙",
                "누군가와 함께 있어도 외로울 수 있고, 혼자여도 충만할 수 있어요. 지금의 공허함이 당신을 정의하지 않아요. 🍃"
            ]
        },
        {
            name: "자존감",
            keywords: ["자존감", "자신감", "못난", "부족한", "잘하는 게 없", "쓸모없"],
            messages: [
                "스스로를 채찍질하는 마음, 이제 잠깐 내려놓아도 돼요. 당신이 생각하는 것보다 당신은 훨씬 괜찮은 사람이에요. 🌟",
                "누구나 서툴고 부족한 부분이 있어요. 그게 당신 전체를 말해주지 않아요. 지금 이대로도 충분히 가치 있는 사람입니다. ✨"
            ]
        },
        {
            name: "미래불안",
            keywords: ["미래", "불안", "진로", "취업", "합격", "시험", "스펙"],
            messages: [
                "불확실한 미래 앞에서 불안한 건 자연스러운 일이에요. 지금 걷고 있는 이 길이 늦어 보여도, 당신만의 속도로 가고 있는 거예요. 🌱",
                "아직 정해지지 않은 미래가 두렵더라도, 지금 이 순간 최선을 다하고 있는 당신을 믿어주세요. 🌿"
            ]
        },
        {
            name: "힘듦지침",
            keywords: ["힘들", "지쳐", "지친", "지침", "우울", "죽겠", "버거워", "버겁", "눈물", "울고싶", "울었"],
            messages: [
                "많이 힘드셨겠어요. 지금 그 마음, 억지로 괜찮은 척하지 않아도 돼요. 잠시 여기서 숨 고르고 가세요. 🌸",
                "지칠 만큼 애써왔다는 뜻이겠죠. 잘 버텨온 스스로를 한 번쯤은 꼭 안아주세요. ☕",
                "힘들다는 말, 그 자체로 충분한 이유가 돼요. 설명하지 않아도 괜찮으니 오늘은 그냥 좀 쉬어가요. 🍃"
            ]
        }
    ];

    // 위로 문구 생성 함수
    function getComfortMessage(userFeeling) {
        if (!userFeeling || userFeeling.trim() === "") {
            const randomMsg = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
            return `오늘 하루 어떠셨나요?\n\n${randomMsg}`;
        }

        const feelingText = userFeeling.trim().replace(/\s+/g, "");

        // 매칭되는 카테고리 전부 찾기 (여러 개 겹치면 랜덤으로 하나 선택)
        const matched = categories.filter(cat =>
            cat.keywords.some(k => feelingText.includes(k))
        );

        if (matched.length > 0) {
            const chosenCat = matched[Math.floor(Math.random() * matched.length)];
            const chosenMsg = chosenCat.messages[Math.floor(Math.random() * chosenCat.messages.length)];
            return chosenMsg;
        }

        // 매칭 안 될 때: ㅠㅠ, ㅜㅜ, ㅋㅋ 같은 자모/이모티콘을 걷어내고
        // 남은 내용이 있을 때만 자연스럽게 인용, 없으면 그냥 공감 멘트로
        const cleaned = userFeeling.trim()
            .replace(/[ㅠㅜㅋㅎㅇㄷㅁ~!?.,]+/g, " ")
            .replace(/\s+/g, " ")
            .trim();

        const randomMsg = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];

        if (cleaned.length >= 2) {
            return `'${cleaned}' 때문에 마음이 쓰이셨군요.\n\n${randomMsg}`;
        }
        return `말로 다 설명하지 않아도 그 마음 알 것 같아요.\n\n${randomMsg}`;
    }

    // HTML 요소 가져오기
    const submitBtn = document.getElementById('submitBtn');
    const userInput = document.getElementById('userInput');
    const outputMsg = document.getElementById('outputMsg');

    if (submitBtn && userInput && outputMsg) {
        submitBtn.addEventListener('click', function() {
            const resultMsg = getComfortMessage(userInput.value);
            outputMsg.value = resultMsg;
        });
    } else {
        console.error("HTML 요소(ID)를 찾을 수 없습니다. index.html의 ID와 일치하는지 확인해 주세요.");
    }
});
