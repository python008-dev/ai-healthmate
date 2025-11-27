export const getFallbackAnalysis = (query: string): string => {
    const queryLower = query.toLowerCase();

    if (queryLower.includes('headache') || queryLower.includes('head pain') ||
        queryLower.includes('sir dard') || queryLower.includes('सिर दर्द') ||
        queryLower.includes('migraine')) {
        return `## 🏥 Detailed Headache Analysis Report

### 📋 Symptoms Identified
**Primary Concern:** Headache / Sir Dard / सिर दर्द

### 🔍 Possible Conditions

**1. Tension Headache (Most Common- 60-70% of all headaches)**
- **Cause:** Stress, anxiety, poor posture, neck/shoulder muscle tension
- **Character:** Dull, aching pain on both sides of head
  - Feels like tight band around head
  - Constant pressure (not throbbing)
- **Intensity:** Mild to moderate (4-6/10)
- **Duration:** 30 minutes to several hours, can be continuous
- **Triggers:** Prolonged sitting, computer work, stress, lack of sleep

**2. Migraine Headache**
- **Cause:** Genetic predisposition, hormonal changes, certain triggers
- **Character:** Throbbing, pulsating pain (usually one side)
  - May switch sides
  - Worsens with movement or activity
- **Associated symptoms:**
  - Nausea or vomiting
  - Sensitivity to light (photophobia)
  - Sensitivity to sound (phonophobia)
  - Sometimes visual aura (seeing flashes, zigzag lines)
- **Intensity:** Moderate to severe (6-9/10)
- **Duration:** 4 hours to 3 days if untreated

**3. Dehydration Headache**
- **Cause:** Insufficient water intake over several hours/days
- **Character:** Dull ache all over head
  - May worsen when bending forward
  - Intensifies with movement
- **Associated:** Dry mouth, dark urine, fatigue, dizziness
- **Intensity:** Mild to moderate
- **Relief:** Usually improves within 1-2 hours of hydrating

**4. Eye Strain / Digital Eye Fatigue**
- **Cause:** Prolonged screen time without breaks
- **Character:** Pressure behind eyes, forehead pain
  - Dull, aching sensation
  - Temples mayache
- **Timing:** Worse in evening after long screen use
- **Associated:** Blurry vision, dry eyes, neck stiffness

### ⚠️ Severity Assessment
**Status:** 🟢 **MILD TO MODERATE** (Usually manageable at home)

**🚨 Red Flags - Seek immediate medical help if:**
- **Thunderclap headache:** Sudden, severe headache (worst ever)
- Headache with fever AND stiff neck (can't touch chin to chest)
- Headache after head injury or fall
- Sudden vision changes or double vision
- Difficulty speaking or understanding speech
- Weakness or numbness on one side of body
- Severe headache during pregnancy
- Headache with seizures
- "Worst headache of your life"
- New headache pattern after age 50
- Progressively worsening over days/weeks

### 💊 IMMEDIATE RELIEF (Next 30-60 minutes)

**STEP 1: Medication**

✓ **First Choice:** Paracetamol 500mg
   - Take 1-2 tablets (500-1000mg)
   - With food and full glass of water
   - Relief expected in 30-45 minutes

✓ **Alternative:** Ibuprofen 400mg
   - If paracetamol not available
   - MUST take with food (not on empty stomach)
   - Better for inflammation-related headaches

✓ **Combination:** Paracetamol + Caffeine
   - Some people get better relief with small amount of caffeine
   - 1 cup of coffee/tea with medicine (if you drink regularly)

⚠️ **Important Medicine Rules:**
- Don't take more than stated dose
- Wait at least 6 hours before next dose
- Don't mix multiple pain medicines without doctor advice
- If headaches very frequent, don't exceed 15 painkiller days per month (can cause rebound headaches)

**STEP 2: Create Rest Environment**

✓ Go to quiet, dark room
   - Turn off all lights or use very dim light
   - Close curtains/blinds
   - No TV, no laptop, no phone scrolling
   - Silence phone or put on airplane mode

✓ Lie down comfortably
   - Support neck with pillow properly
   - Use extra pillow if needed
   - Try different positions to find most comfortable

✓ Close eyes, relax
   - 20-30 minutes minimum
   - Don't force sleep, just rest
   - Focus on breathing deeply

**STEP 3: Hot/Cold Therapy**

✓ **For Tension Headache:** Warm compress
   - Apply on back of neck and shoulders
   - 15-20 minutes
   - Helps relax tight muscles

✓ **For Migraine:** Cold pack
   - Apply on forehead or temples
   - Wrap ice pack in thin cloth (don't apply directly)
   - 15-20 minutes
   - Can alternate: 15 min cold, break, repeat

**STEP 4: Immediate Hydration**

✓ Drink 2-3 full glasses of water right away
   - Room temperature water preferred
   - Drink slowly, not in one gulp

✓ Continue drinking throughout day
   - Target: 8-10 glasses total
   - Every hour, drink 1 glass

### 🎯 QUICK RELIEF TECHNIQUES (Do Along with Above)

**1. Scalp Massage (5-10 minutes)**

✓ Temples:
   - Use fingertips in small circular motions
   - Gentle to moderate pressure
   - Both sides simultaneously
   - 2-3 minutes

✓ Forehead:
   - Place palms on forehead
   - Gentle sweeping motion from center outward
   - Light pressure
   - Repeat 10-15 times

✓ Neck and base of skull:
   - Massage neck muscles gently
   - From base of skull down to shoulders
   - Use upward strokes with firm pressure
   - Pay attention to tight, tender spots

✓ Scalp:
   - Use fingertips to massage entire scalp
   - Like shampooing hair
   - Circular motions
   - 2-3 minutes

**2. Stretching Exercises (5 minutes)**

✓ Neck Rolls:
   - Slowly roll head in circular motion
   - 5 times clockwise
   - 5 times counter-clockwise
   - Very slow, gentle movements

✓ Shoulder Shrugs:
   - Raise shoulders toward ears
   - Hold for 5 seconds
   - Release and drop
   - Repeat 10 times

✓ Head Tilts:
   - Tilt head to right (ear toward shoulder) - hold 10 sec
   - Return to center
   - Tilt to left - hold 10 sec
   - Tilt forward (chin to chest) - hold 10 sec
   - Tilt back gently - hold 10 sec
   - Do 5 sets

✓ Chin Tucks:
   - Pull chin straight back (make double chin)
   - Hold 5 seconds
   - Release
   - Repeat 10 times
   - Good for posture, relieves neck tension

**3. Deep Breathing Relaxation**

✓ Sit comfortably or lie down
✓ Close eyes
✓ Place one hand on belly
✓ Breathing pattern:
   - Inhale deeply through nose for count of 4
   - Belly should expand
   - Hold breath for count of 4
   - Exhale slowly through mouth for count of 6
   - Belly should deflate
✓ Repeat 10-15 times
✓ Focus only on breathing, let other thoughts go

### 🛡️ PREVENTION STRATEGIES (Long-term)

**Daily Hydration Habit**

✓ Morning routine:
   - Drink 2 glasses water immediately after waking up
   - Before any tea/coffee

✓ Throughout day:
   - Keep water bottle at desk/nearby always
   - Set phone reminders every hour
   - Track intake using apps if needed

✓ Target:
   - Minimum 8 glasses (2 liters)
   - More if exercising, hot weather
   - Urine should be light yellow (dark yellow = need more water)

**Screen Time Management (Critical for Modern Lifestyle)**

✓ **20-20-20 Rule** (Must follow religiously):
   - Every 20 minutes of screen time
   - Look at something 20 feet (6 meters) away
   - For at least 20 seconds
   - Set timer/use apps to remind

✓ Screen setup:
   - Monitor at arm's length distance
   - Top of screen at or slightly below eye level
   - Reduce brightness to comfortable level
   - Use blue light filter (Night mode) after sunset
   - Increase font size if straining to read

✓ Breaks:
   - 5-minute break every hour
   - Stand up, walk around
   - Look out window
   - Stretch
   - Don't eat lunch at desk while working

✓ Evening routine:
   - No screens 1 hour before bed
   - Reading physical book OK
   - Dim lights
   - Helps prevent headaches and improves sleep

**Sleep Hygiene**

✓ Fixed schedule:
   - Same sleep time and wake time daily
   - Even on weekends (maximum 1 hour difference)
   - Sets body clock

✓ Duration:
   - 7-9 hours for adults
   - Teenagers need 8-10 hours
   - Quality matters more than quantity

✓ Bedroom environment:
   - Dark (blackout curtains or eye mask)
   - Quiet (earplugs if needed)
   - Cool temperature (18-22°C ideal)
   - Comfortable mattress and pillow
   - Good pillow support for neck crucial

✓ Pre-sleep routine:
   - Same activities nightly signals brain
   - Warm shower
   - Reading
   - Light stretching
   - Meditation

**Posture Correction**

✓ Sitting properly:
   - Back straight against chair
   - Shoulders relaxed (not hunched)
   - Feet flat on floor
   - Knees at 90-degree angle
   - Screen at eye level (no looking down)

✓ Regular checks:
   - Set reminder every 30 minutes
   - Check and correct posture
   - Initially need conscious effort
   - Becomes habit over time

✓ Ergonomic setup:
   - Proper chair with lumbar support
   - Mouse and keyboard at comfortable distance
   - Consider standing desk or alternate sitting/standing

**Stress Management**

✓ Daily practices:
   - 10-15 minutes meditation or pranayam
   - Even 5 minutes helps
   - Many free apps available (Headspace, Calm, etc.)

✓ Regular exercise:
   - 30 minutes, 5 days per week minimum
   - Walking, jogging, cycling, swimming, yoga
   - Releases endorphins (natural pain relievers)
   - Reduces stress hormones

✓ Leisure time:
   - Hobbies, interests
   - Social connections
   - Work-life balance
   - Say no to excessive commitments

**Food & Headache Triggers**

✓ **Common Migraine Triggers - Avoid if prone:**
   - Aged cheese (cheddar, blue cheese, parmesan)
   - Processed meats (salami, hot dogs, bacon)
   - Chinese food (MSG - monosodium glutamate)
   - Pickles, fermented foods
   - Alcohol (especially red wine, beer)
   - Excessive caffeine (more than 2-3 cups daily)
   - Artificial sweeteners (aspartame)
   - Chocolate (for some people)

✓ **Keep food diary:**
   - Note what you ate before headaches
   - Spot patterns over weeks
   - Eliminate suspected triggers one by one

✓ **Headache-preventing foods:**
   - Magnesium-rich: Spinach, almonds, avocado, dark chocolate (small amount)
   - Omega-3: Fish, walnuts, flaxseeds
   - Riboflavin (B2): Eggs, lean meats, green vegetables
   - CoQ10: Fish, nuts, beans
   - Ginger: Natural anti-inflammatory

✓ **Regular meal times:**
   - Don't skip meals (causes blood sugar drops)
   - Eat something every 3-4 hours
   - Especially don't skip breakfast

### 📊 When to Consult Doctor

**See doctor if:**
- Headaches occurring 3 or more times per week
- Over-the-counter medicines not providing relief
- Headaches interfering with work, school, daily activities
- Character of headaches changes suddenly  
- Intensity increasing over time
- Need increasing doses of painkillers
- Different type of headache than usual
- New headache after age 50
- Headaches waking you from sleep
- Headaches every morning

**Doctor may:**
- Do neurological examination
- Check blood pressure
- Possibly order tests (if needed)
- Prescribe preventive medications (for chronic migraines)
- Refer to specialist (neurologist) if complex

### 💡 Lifestyle Summary (Quick Reference)

**This Week Action Plan:**
✓ Today: Start headache diary (time, intensity, triggers, relief)
✓ This week: Ensure 8 hours sleep every night
✓ Daily: Track water intake (minimum 8 glasses)
✓ Daily: Follow 20-20-20 screen rule religiously
✓ Daily: 30 minutes walk or exercise
✓ Reduce coffee/tea to maximum 2 cups
✓ Practice neck stretches twice daily

### ⚕️ Medical Disclaimer

**IMPORTANT:** This is a DEMO health analysis for educational and informational purposes only. Headaches can have many different causes ranging from benign to serious conditions.

This information does **NOT** replace professional medical evaluation and advice. Only a qualified doctor can perform proper examination and provide accurate diagnosis.

**For proper medical diagnosis and treatment, please consult a licensed healthcare professional.**

### 📞 Seek Professional Help

**Contact healthcare provider if:**
- Unsure about your headache
- Headaches disrupting life
- Worried about something serious
- Need reassurance

Thank you for reaching out. Since specific symptoms weren't clearly identified, I'll provide comprehensive general health guidance and help you understand when and how to seek proper medical care.

### 🔍 Initial Assessment

To provide you with best possible guidance, ideally a health query should include:

✓ **Specific symptoms you're experiencing:**
   - What exactly are you feeling?
   - Where in the body?
   - Pain, discomfort, changes?

✓ **When did it start:**
   - Today, yesterday, several days ago?
   - Sudden or gradual onset?

✓ **Severity:**
   - Mild (slightly bothersome)
   - Moderate (affecting daily activities)
   - Severe (very distressing, unable to function normally)

✓ **Pattern:**
   - Constant or comes and goes?
   - Better at certain times?
   - Worse with certain activities?

✓ **What makes it better/worse:**
   - Food, rest, movement?
   - Any triggers you've noticed?

### 📊 General Health Monitoring

**Track These Vital Signs (if possible):**

**1. Temperature:**
- Normal: 97-99°F (36.1-37.2°C)
- How to check: Digital thermometer under tongue
- When to worry: >100.4°F (38°C) = fever

**2. Pulse/Heart Rate:**
- Normal resting: 60-100 beats per minute
- How to check: Fingers on wrist, count for 60 seconds
- When to worry: Very fast (>120) or very slow (<50) at rest

**3. Breathing Rate:**
- Normal: 12-20 breaths per minute
- Should be easy and comfortable
- When to worry: Difficulty breathing, very fast breathing

**4. Blood Pressure (if machine available):**
- Normal: Around 120/80 mmHg
- When to worry: Very high (>140/90) or very low (<90/60)

**5. Symptom Diary:**
- Write down what you're feeling, when, intensity (1-10 scale)
- Note any patterns
- Helps doctor make better diagnosis

### 💊 GENERAL HEALTH CARE RECOMMENDATIONS

**IMMEDIATE CARE (Today):**

**1. Rest & Recovery**
✓ Get adequate rest
   - Plan for 8-9 hours sleep tonight
   - If feeling unwell, take it easy
-  Listen to your body

✓ Avoid overexertion
   - No strenuous exercise if feeling unwell
   - Light activities OK if feeling fine
   - Don't push through severe discomfort

✓ Stress reduction
   - Take breaks
   - Do something relaxing
   - Deep breathing exercises

**2. Hydration (Very Important)**
✓ Drink adequate water
   - Target: 8-10 glasses (2-2.5 liters) today
   - Spread throughout day
   - Set reminders if needed

✓ Include variety:
   - Plain water (best)
   - Fresh fruit juices
   - Coconut water
   - Herbal teas
   - Soups, broths

✓ Signs of good hydration:
   - Light yellow urine
   - Not feeling thirsty
   - Moist lips
   - Good energy levels

**3. Nutrition**
✓ Eat balanced meals
   - Don't skip meals
   - Include variety

✓ Meal composition:
   - Whole grains (roti, rice, quinoa)
   - Protein (dal, eggs, chicken, fish, paneer)
   - Vegetables (variety of colors)
   - Fruits (2-3 servings)
   - Healthy fats (nuts, seeds, ghee in moderation)

✓ Timing:
   - Breakfast within 1-2 hours of waking
   - Lunch midday
   - Dinner 2-3 hours before sleep
   - Healthy snacks if hungry between meals

✓ What to avoid when not feeling well:
   - Very spicy food
   - Very oily/fried food
   - Excessive sweets
   - Heavy meals close to bedtime

**4. Basic Hygiene**
✓ Wash hands frequently
   - Before eating
   - After bathroom
   - After coming home from outside
   - 20 seconds with soap

✓ Oral hygiene
   - Brush twice daily
   - Floss once daily
   - Clean tongue

### 📅 THIS WEEK HEALTH PLAN

**Daily Routine:**

✓ **Fixed Sleep Schedule**
   - Same time to bed and wake up daily
   - Even weekends
   - 7-9 hours for adults

✓ **Regular Meal Times**
   - Helps digestion
   - Stabilizes energy
   - Prevents acidity

✓ **Physical Activity**
   - 30 minutes daily if feeling well
   - Can be:
     - Brisk walking
     - Jogging
     - Cycling
     - Swimming
     - Yoga
     - Home exercises
   - Start slow if not regular
   - Something is better than nothing

✓ **Screen Management**
   - Reduce unnecessary screen time
   - Take breaks every 30-60 minutes
   - No screens 1 hour before bed
   - Protect your eyes

**Stress & Mental Health:**

✓ **Daily Practices**
   - 10-15 minutes quiet time/meditation
   - Deep breathing exercises
   - Gratitude practice (note 3 good things daily)

✓ **Social Connections**
   - Talk to family, friends
   - Don't isolate
   - Share concerns

✓ **Hobbies & Interests**
   - Make time for things you enjoy
   - Music, reading, cooking, gardening
   - Balance work and life

✓ **Professional help if needed**
   - If feeling very stressed, anxious, or low
   - Mental health is as important as physical health
   - Talking to counselor/therapist is normal and helpful

### 🚨 WHEN TO SEE A DOCTOR

**Consult doctor if you experience:**

**General Symptoms:**
- Any symptom lasting more than 3-5 days without improvement
- Symptoms worsening despite self-care
- Severe pain (7+ on scale of 10)
- Symptoms interfering with daily work/activities
- New, unusual symptoms you've never had before
- You're worried something is seriously wrong

**Specific Red Flags - Seek immediate care:**
- High fever (>103°F/39.4°C) not reducing
- Difficulty breathing or shortness of breath
- Chest pain or pressure
- Severe headache (worst ever)
- Sudden vision changes
- Difficulty speaking or understanding
- Weakness or numbness (especially one side)
- Severe bleeding
- Severe abdominal pain
- Persistent vomiting (can't keep anything down)
- Signs of dehydration (very dark urine, extreme thirst, dizziness)
- Loss of consciousness
- Seizures
- Thoughts of self-harm

**Emergency Services:**
- Call ambulance for life-threatening situations
- Don't delay if very serious
- Better to be overcautious

### 💡 PREVENTIVE HEALTH TIPS

**Monthly Health Habits:**

✓ **Self-examination**
   - Check skin for new moles or changes
   - Note any lumps or bumps
   - Any persistent changes

✓ **Weight monitoring**
   - Weigh once a month
   - Sudden changes (gain/loss) need attention

**Annual Check-ups:**

✓ **General health screening** (if >35 years or risk factors)
   - Blood pressure
   - Blood sugar
   - Cholesterol
   - Complete blood count

✓ **Dental check-up**
   - Every 6 months
   - Professional cleaning

✓ **Eye examination**
   - Yearly if using glasses/contacts
   - Every 2 years if no issues

✓ **Vaccinations**
   - Keep updated
   - Flu shot annually (if recommended)
   - Others as per doctor advice

**Know Your Family History:**
- Note any diseases in family (diabetes, heart disease, cancer)
- Share with doctor
- May need earlier/more frequent screening

### 📱 For More Accurate Help

**Please provide details like:**
1. Specific symptoms (what exactly?)
2. Location (where in body?)
3. When started (today, days, weeks ago?)
4. Severity (mild, moderate, severe?)
5. Duration (constant or come-and-go?)
6. Triggers (what makes better/worse?)
7. Associated symptoms (fever, nausea, etc.?)
8. Any existing medical conditions?
9. Current medications?
10. Allergies?

**Better query examples:**
- "I have fever of 101°F for 2 days with body ache"
- "Severe headache on right side for 6 hours with nausea"
- "Stomach pain after eating, started yesterday, moderate intensity"

### ⚕️ MEDICAL DISCLAIMER

**VERY IMPORTANT - Please Read:**

This is a DEMO health analysis for **educational and informational purposes ONLY.**

This information is general guidance and **NOT a substitute for professional medical advice, diagnosis, or treatment.**

**Key Points:**
- Every person is unique
- Health conditions require proper medical evaluation
- Only a qualified doctor can examine you and make accurate diagnosis
- Self-diagnosis can be dangerous
- When in doubt, always consult healthcare professional

**This guidance cannot:**
- Replace physical examination
- Replace lab tests or diagnostic procedures
- Provide specific medical treatment
- Guarantee outcomes

### 📞 SEEK PROFESSIONAL MEDICAL CARE

**Please consult qualified healthcare provider:**

**Your Options:**
✓ Family doctor/GP (General Practitioner)
✓ Local clinic or hospital
✓ Specialist (if referred)
✓ Telemedicine (Practo, 1mg, etc.) for quick consultation
✓ Emergency services (for urgent situations)

**Why see a real doctor:**
- Proper physical examination
- Order necessary tests
- Accurate diagnosis
- Personalized treatment plan
- Follow-up care
- Legal prescriptions
- Professional accountability

**Remember:**
- Your health is precious
- Professional care is always best
- Don't delay seeking help if concerned
- Better safe than sorry
- Trust your instincts - if something feels very wrong, get checked

### 🎯 Summary Action Points

**TODAY:**
✓ Drink 8-10 glasses water
✓ Eat 3 balanced meals
✓ Get 8 hours sleep tonight
✓ Note down your symptoms clearly

**THIS WEEK:**
✓ Maintain regular sleep schedule
✓ 30 minutes physical activity daily
✓ Reduce screen time
✓ Practice stress management

**IF SYMPTOMS PERSIST:**
✓ Consult doctor
✓ Don't self-medicate for extended periods
✓ Get proper diagnosis

### 💙 Final Message

Health is your most valuable asset. While general information and self-care are important, nothing replaces professional medical evaluation when you're unwell or concerned.

**Take care of yourself. Listen to your body. Seek help when needed.**

**Stay healthy, stay safe!** 👨‍⚕️

---
*For more specific guidance, please describe your symptoms in detail. I'm here to help with information, but please see a real doctor for medical care!*`;
    }

    return `## 🏥 Detailed Health Analysis Report

### 📋 Symptoms Identified
**Primary Concern:** Fever / Bukhar / बुखार

### 🔍 Possible Medical Conditions

**1. Viral Infection (Most Likely - 70% probability)**
- **Cause:** Common cold viruses (Rhinovirus, Coronavirus strains)
- **Symptoms:** Fever 100-102°F, runny nose, body ache, fatigue, throat irritation
- **Duration:** Usually 3-7 days
- **Contagious:** Yes, spreads through droplets when coughing/sneezing
- **Severity:** Mild to Moderate

**2. Seasonal Influenza (Flu)**
- **Cause:** Influenza virus A/B strains
- **Symptoms:** High fever (101-104°F), severe body ache, extreme tiredness, dry cough
- **Duration:** 5-7 days acute phase, weakness may last 2 weeks
- **Contagious:** Highly contagious for first 3-4 days
- **Severity:** Moderate

**3. Upper Respiratory Infection**
- **Cause:** Bacterial or viral infection of airways
- **Symptoms:** Fever, cough with phlegm, chest congestion
- **May require:** Antibiotics if bacterial (only doctor can prescribe)
- **Severity:** Moderate

### ⚠️ Severity Assessment
**Current Status:** 🟡 **MODERATE** (Requires careful homecare and monitoring)

**⚠️ RED FLAGS - See doctor immediately if you notice:**
- Temperature above 103°F (39.4°C) that doesn't reduce with medicine
- Fever continuing for more than 3 consecutive days
- Difficulty breathing or shortness of breath
- Severe chest pain
- Persistent vomiting (can't keep water down)
- Severe headache with stiff neck
- Confusion, extreme drowsiness, or difficulty waking up
- Dehydration signs (very dark urine, no urination for 12+ hours)
- Seizures or convulsions

### 💊 DETAILED TREATMENT PLAN

## IMMEDIATE ACTIONS (Next 2-4 hours):

**1. Temperature Management**
✓ Take Paracetamol (Crocin/Dolo) 500mg-1000mg tablet
   - Adult dose: 1-2 tablets
   - Take with full glass of water
   - Can repeat after 6-8 hours if needed
   - MAXIMUM: 4000mg (8 tablets) in 24 hours
   - For children: Consult doctor or use pediatric syrup

✓ Apply cold water compress on forehead if temp >100°F
   - Soak cloth in normal tap water
   - Place on forehead for 10-15 minutes
   - Repeat every 2 hours

✓ Sponge bath with room temperature water if very high fever
   - Use normal water (not ice-cold)
   - Wipe arms, legs, back gently
   - Continue for 10-15 minutes

**2. Hydration Protocol (VERY IMPORTANT)**
✓ Drink 1 full glass (250ml) water every hour while awake
   - Target: 10-12 glasses (2.5-3 liters) per day minimum
   - Set alarm every hour as reminder

✓ Include variety of fluids:
   - Plain water
   - ORS (Oral Rehydration Solution) - 2-3 glasses
   - Coconut water - natural electrolytes
   - Fresh fruit juice (orange, pomegranate)
   - Warm liquids preferred

✓ Beneficial warm drinks:
   - Ginger tea (adrak wali chai)
   - Honey lemon water (1 spoon honey + half lemon + warm water)
   - Tulsi (basil) tea
   - Warm chicken soup or vegetable broth

✓ AVOID:
   - Alcohol completely
   - Cold drinks/sodas
   - Excessive strong tea/coffee

**3. Rest Requirements**
✓ Complete bed rest for first 24-48 hours
   - No work, no studies, no household chores
   - Let your body fight the infection

✓ Sleep schedule:
   - Night: 8-10 hours minimum
   - Day: 2-3 short na ps (30-45 minutes each)
   - Total rest: 10-12 hours daily

✓ Avoid completely:
   - Heavy physical work
   - Exercise or gym
   - Standing/walking for long periods
   - Exposure to cold air or AC

## HOME CARE (Days 1-3):

**NUTRITION - What to Eat**

✓ Light, easily digestible meals:
   - **Khichdi** (rice + dal cooked together) - Best option
   - Plain dal-chawal (lentils with rice)
   - Boiled vegetables
   - Porridge (daliya)
   - Soft idli, dosa with sambar
   - Boiled eggs
   - Mashed potatoes

✓ Fruits (Vitamin C rich):
   - Oranges, sweet lime (mosambi)
   - Papaya
   - Bananas (for energy)
   - Apples (boiled or stewed if cold)
   - Pomegranate juice

✓ Meal frequency:
   - Small portions, 5-6 times daily
   - Don't force if no appetite
   - But DO drink fluids even if not hungry

**AVOID These Foods:**
✗ Oily, fried foods (pakora, samosa, fried chicken)
✗ Very spicy food (mirchi wala khana)
✗ Heavy non-veg (mutton, beef)
✗ Ice cream, cold foods
✗ Street food, outside food
✗ Sweets, chocolates

**2. Steam Inhalation** (बहुत फायदेमंद)
✓ Timing: 2-3 times daily
   - Morning after waking up
   - Evening around 6-7 PM
   - Before bed at night

✓ Method:
   - Boil water in a pot/kettle
   - Pour in a large bowl
   - Add: Vicks, eucalyptus oil, or pudina (mint) leaves (optional)
   - Cover head with towel, lean over bowl
   - Inhale steam through nose and mouth
   - Duration: 10-15 minutes each session
   - Keep eyes closed

✓ Benefits:
   - Clears blocked nose
   - Reduces congestion
   - Soothes throat
   - Eases breathing

✓ Safety:
   - Be careful not to get too close (risk of burns)
   - Keep children supervised
   - Water should be hot, not boiling

**3. Gargling** (गरारे करना)
✓ Frequency: 3-4 times daily
   - After waking up
   - After meals
   - Before sleeping

✓ Solution:
   - Warm salt water (best)
     - 1 glass warm water + 1 teaspoon salt
   - OR Betadine gargle (diluted as per instructions)
   - OR turmeric water (haldi pani)

✓ Method:
   - Take sip of warm solution
   - Tilt head back
   - Gargle for 30 seconds
   - Spit out
   - Repeat 4-5 times

✓ Benefits:
   - Soothes sore throat
   - Reduces throat infection
   - Provides relief from irritation

**4. Isolation to Prevent Spreading**
✓ Stay in separate room if possible
✓ Use separate utensils (plate, glass, spoon)
✓ Separate towel, pillow covers
✓ Wear mask when around family members
✓ Cover mouth when coughing/sneezing
✓ Dispose tissues properly in covered dustbin
✓ Wash hands frequently with soap
✓ Don't share phone, remote control

## DAILY MONITORING (Track these):

✓ **Temperature Tracking:**
   - Check 3 times daily: Morning (6-8 AM), Afternoon (2-4 PM), Evening (8-10 PM)
   - Write down readings with time
   - Note: Should gradually decrease over 2-3 days

✓ **Watch for:**
   - Cough development (dry or with phlegm?)
   - Breathing comfort (easy or difficult?)
   - Energy levels (improving or same?)
   - Appetite returns by day 3-4
   - Taste/smell normal or affected?

✓ **Good signs of recovery:**
   - Fever reducing and staying down
   - Appetite returning
   - Energy improving
   - Can get up and walk without dizziness

### 🚨 WHEN TO SEE DOCTOR IMMEDIATELY

**Go to doctor or hospital if ANY of these:**
- Fever doesn't reduce even after taking medicine
- Temperature reaches or exceeds 103°F (39.4°C)
- Fever continues for more than 3 days
- Severe headache that paracetamol doesn't help
- Breathing becomes difficult or fast
- Chest pain or pressure
- Persistent vomiting (can't keep anything down)
- Extreme weakness (can't stand up)
- Confusion or disorientation
- No improvement after 48 hours of proper home care
- Existing conditions: Diabetes, heart disease, asthma patients - consult earlier

### 📅 Expected Recovery Timeline

- **Day 1-2:** Fever at peak, body ache maximum, weakness, low appetite
- **Day 3-4:** Fever should start reducing, appetite slowly returns, slight energy boost
- **Day 5-7:** Most symptoms resolve, energy returning to 70-80%, can do light activities
- **Day 8-10:** Complete recovery, back to normal routine, full energy restored

### 💡 Additional Tips

**Do's:**
✓ Stay warm, avoid cold exposure
✓ Keep  room well-ventilated but not too cold
✓ Change pillowcase daily (sweat accumulation)
✓ Maintain oral hygiene (brush teeth, tongue)
✓ Light stretching in bed (prevent stiffness)

**Don'ts:**
✗ Don't take cold shower/bath
✗ Don't sit under fan/AC directly
✗ Don't skip meals completely
✗ Don't stress or worry too much

### ⚕️ Medical Disclaimer
**IMPORTANT:** This is a DEMO health analysis for educational purposes based on common fever patterns. This information does **NOT** replace professional medical advice, diagnosis, or treatment.

Every individual is different. The cause of fever can range from simple viral infection to serious conditions. Only a qualified doctor can provide accurate diagnosis after proper examination.

**For actual medical diagnosis and treatment, please consult a licensed healthcare professional in person.**

### 📞 Need Real Medical Help?

**Contact:**
- Your regular family doctor/physician
- Nearest clinic or hospital
- Emergency services if severe symptoms
- Telemedicine apps (Practo, Tata 1mg) for quick consultation

**Remember: This is just general guidance. Your health is precious - don't hesitate to see a real doctor if you're worried!** 👨‍⚕️

---
*Stay safe, drink plenty of fluids, and get well soon!* 💙`;
};
