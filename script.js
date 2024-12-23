let currentIndex = 0;

        function startSlideshow() {
            const profileImages = document.querySelectorAll('.profile img');
            setInterval(() => {
                profileImages[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % profileImages.length;
                profileImages[currentIndex].classList.add('active');
            }, 2000);
        }

        function startKoreaSlideshow() {
            const koreaImages = document.querySelectorAll('#Korea img');
            let koreaIndex = 0;

            setInterval(() => {
                koreaImages[koreaIndex].classList.remove('active');
                koreaIndex = (koreaIndex + 1) % koreaImages.length;
                koreaImages[koreaIndex].classList.add('active');
            }, 2200);
        }

        let idolText = document.querySelector('.idol');
        let idolInterval;
        function showIdols() {
            const idols = ["宋雨琦", "G-idle", "aespa", "IVE", "AKMU","金鐘國","seventeen","金采源","BLACKPINK"];
            let index = 0;

            idolInterval = setInterval(() => {
                idolText.textContent = `我的偶像: ${idols[index]}`;
                index = (index + 1) % idols.length;
            }, 2050);
          isIdolActive = true;
        }

         function stop() {
            clearInterval(idolInterval);
            idolText.textContent = "偶像顯示已停止";
            isIdolActive = false;
        }

        function resume() {
            if (!isIdolActive) {
                showIdols();
            }
        }

function checkZodiac() {
            const zodiacSigns = [
                { name: "水瓶座", start: "01-20", end: "02-18" },
                { name: "雙魚座", start: "02-19", end: "03-20" },
                { name: "白羊座", start: "03-21", end: "04-19" },
                { name: "金牛座", start: "04-20", end: "05-20" },
                { name: "雙子座", start: "05-21", end: "06-20" },
                { name: "巨蟹座", start: "06-21", end: "07-22" },
                { name: "獅子座", start: "07-23", end: "08-22" },
                { name: "處女座", start: "08-23", end: "09-22" },
                { name: "天秤座", start: "09-23", end: "10-22" },
                { name: "天蠍座", start: "10-23", end: "11-21" },
                { name: "射手座", start: "11-22", end: "12-21" },
                { name: "摩羯座", start: "12-22", end: "01-19" }
            ];

            const birthdayInput = document.getElementById("birthday").value;

            if (!birthdayInput) {
                document.getElementById("zodiacResult").innerText = "請先選擇生日！";
                return;
            }

            const birthday = new Date(birthdayInput);
            const monthDay = ("0" + (birthday.getMonth() + 1)).slice(-2) + "-" + ("0" + birthday.getDate()).slice(-2);

            const zodiac = zodiacSigns.find(sign => {
                return (monthDay >= sign.start && monthDay <= sign.end) ||
                    (sign.start > sign.end && (monthDay >= sign.start || monthDay <= sign.end));
            });

            document.getElementById("zodiacResult").innerText = zodiac ? `您的星座是：${zodiac.name}` : "無法判定星座。";
        }

        window.onload = function () {
            startSlideshow();
            startKoreaSlideshow();
            showIdols();
        };
let targetNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const guess = parseInt(document.getElementById("guessInput").value);
            const messageElement = document.getElementById("message");

            if (isNaN(guess) || guess < 1 || guess > 100) {
                messageElement.innerHTML = "<span class='error'>請輸入 1 到 100 之間的數字。</span>";
                return;
            }

            attempts++;

            if (guess === targetNumber) {
                messageElement.innerHTML = `<span class='success'>恭喜你！猜中了！答案是 ${targetNumber}，你共用了 ${attempts} 次機會。</span>`;
            } else if (guess > targetNumber) {
                messageElement.innerHTML = "<span class='error'>太高了！再試試看。</span>";
            } else {
                messageElement.innerHTML = "<span class='error'>太低了！再試試看。</span>";
            }
        }

        function resetGame() {
            targetNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            document.getElementById("guessInput").value = "";
            document.getElementById("message").innerHTML = "遊戲已重置，請開始新一輪猜測！";
        }