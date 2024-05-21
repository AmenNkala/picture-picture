const videoElement = document.getElementById("video");
const button = document.getElementById("button");

const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        // Set the media stream as the source of the video element
        videoElement.srcObject = mediaStream;

        // When the media metadata is loaded, start playing the video
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        console.error('Error accessing display media:', error);
    }
};


async function handlePictureInPicture() {
    try {
        button.disabled = true;
        await videoElement.requestPictureInPicture();
    } catch (error) {
        console.error('Failed to enter Picture-in-Picture mode:', error);
    } finally {
        button.disabled = false;
    }
}

button.addEventListener("click", handlePictureInPicture);
selectMediaStream();