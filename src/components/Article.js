import React from "react";

function makeEmojiList(minutes) {
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes <30 ? "☕️" : "🍱";

    let emjis = "";
    for (let i = 0; i < minutes; i += interval) {
        emjis += emoji;
    }
    return emjis;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const emojis = makeEmojiList(minutes);
    
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} * {emojis} {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;