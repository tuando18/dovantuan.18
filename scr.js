// Get the Audio Element by ID
var audio = document.getElementById("myAudio");

// Hàm để bật/tắt âm thanh
function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Hàm hiển thị thông báo và kích hoạt phát nhạc khi trang web được tải
function showNotificationAndPlayAudio() {
    var notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = "<p>Designed By dtuan =))</p><p>- Click to continue -</p>";
    document.body.appendChild(notification);

    // Add event listener to the entire notification for audio toggle
    notification.addEventListener("click", function () {
        document.body.removeChild(notification);
        toggleAudio();
    });
}

// Gọi hàm showNotificationAndPlayAudio khi trang web được tải
window.addEventListener("load", showNotificationAndPlayAudio);
