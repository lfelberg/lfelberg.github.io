# Next Features

This page captures ideas for future improvements to Soft Landing. These are roadmap concepts, not commitments to a particular release.

## 1. Growing flower garden

Create a gentle flower or garden visualization that grows as the person completes more tasks.

### Experience

- Completing a task adds visible life to the garden, such as a sprout, flower, leaf, or patch of grass.
- Continued progress gradually makes the garden fuller and more varied.
- The garden should celebrate consistency without punishing missed days. Plants should not wilt or disappear when the person takes a break.
- Growth should feel calm and rewarding, with subtle animation and an option to reduce or disable motion.
- Consider occasional milestones that unlock a new flower, color, garden area, or small ambient detail.

### Product notes

- Build on the app's existing "digital meadow" idea so the visualization feels like a natural part of Soft Landing.
- Keep the relationship between completed tasks and garden growth easy to understand.
- Save garden progress locally or with the person's account, depending on the app's data model.
- Avoid competitive mechanics, streak pressure, or messaging that could create guilt.

## 2. Ratings pop-up

Add an in-app ratings prompt, but only after the person has had enough time to experience one of Soft Landing's key benefits.

### Suggested trigger

Show the prompt at the next calm, natural stopping point after all of these are true:

1. At least **3 days** have passed since the person's first use.
2. The person has opened the app on at least **3 separate days**.
3. The person has successfully used a key feature—for example, completing their **fifth task** or reaching their first meaningful garden milestone.
4. The person has just finished an action and is not in the middle of choosing or completing a task.

This timing lets the prompt follow a positive moment while avoiding an interruption during the core experience.

### Prompt behavior

- Ask once initially, with options such as **Rate Soft Landing**, **Maybe later**, and **No thanks**.
- If the person chooses **Maybe later**, wait at least **30 days** and require another positive milestone before asking again.
- If the person chooses **No thanks**, do not ask again automatically.
- Never show the prompt during onboarding, immediately after launch, after a missed task, or during an error state.
- Respect platform limits and use the native App Store or Play Store rating flow where available.
- Track only the minimum local state needed to determine eligibility and avoid storing sensitive task details for this purpose.

### Success measures

- Rating-prompt acceptance rate.
- Dismissal and "Maybe later" rates.
- Whether sessions end shortly after the prompt, which may indicate that it feels disruptive.
- Store rating volume and average rating, reviewed alongside qualitative feedback.

## 3. Daily journal check-in

Offer a brief, optional journal or check-in the first time the person opens the app each day.

### Experience

- Ask one gentle question, such as "How are you arriving today?" or "What would make home feel a little softer today?"
- Let the person respond with a mood, a few words, a longer journal entry, or simply skip it.
- Use the response to suggest an appropriately sized task, without treating the person's mood as a score.
- Show the check-in no more than once per day and include a setting to turn it off entirely.
- Keep past entries private and easy to review, export, or delete.

## 4. Energy-based task suggestions

Let the person choose how much energy they have—such as **Very little**, **A little**, or **Ready to go**—and suggest tasks that match.

- Prioritize tasks by effort and estimated time rather than urgency alone.
- Include genuinely tiny options for low-energy days.
- Allow the person to change the energy level or browse all tasks at any time.
- Avoid language that frames a low-energy choice as failure.

## 5. Gentle focus mode

Create a focused task view that shows only the current small step, an optional timer, and calming guidance.

- Break larger home-care tasks into short, approachable steps.
- Offer timers such as 2, 5, or 10 minutes, with no penalty for stopping when time ends.
- Include **Pause**, **Finish for now**, and **Complete** actions.
- Celebrate effort even when the full task is not finished.

## 6. Personal care rhythms

Allow people to create flexible routines for recurring home-care needs without rigid streaks or overdue warnings.

- Support rhythms such as daily, weekly, monthly, or "whenever it feels useful."
- Suggest a routine based on completed tasks, but require confirmation before creating it.
- If a routine is missed, quietly offer it again later instead of building up an overdue list.
- Let people pause or adjust routines when life changes.

## 7. Rest and reset mode

Add a mode for days when normal tasks feel like too much, replacing the regular list with a few restorative options.

- Offer choices such as opening a window, clearing a place to sit, drinking water, or doing one two-minute reset.
- Let the person activate it manually or choose it from the daily check-in.
- Preserve existing tasks without showing them as overdue while the mode is active.
- End with a kind acknowledgment rather than a productivity score.
