---
# Hacking with Google Assistant

---
# Hello!
## Moritz Gruber
mg166
@movCode 

---
# Outline
1. Setup Google Assistant on Raspberry Pi
2. Design Principles
3. Change Hotword
4. Demo
5. Architecture of Sample App
6. Developing and Debugging Serverless functions
7. Conclusion



---

# 1. Setup Google Assistant on Raspberry Pi {.big}

---
Setup Google Assistant on Raspberry Pi
- Hardware
- Audio configuration
- Google Cloud authentication
- Run Sample

---

# Hardware

- Raspberry Pi 3
- USB microphone
- speaker

---

# Audio configuration

* ```arecord -l``` to get microphone device number
* ```aplay -l``` to get speaker device number
* configure ```~/.asoundrc``` whit the device numbers you just got
```json
pcm.!default {
    type asym
    playback.pcm {
        type plug
        slave.pcm "hw:1,0"
    }
    capture.pcm {
        type plug
        slave.pcm "hw:0,0"
    }
}
```

---

# Google Cloud authentication

- Register at Google Cloud
- Enable Assistant Api
- Create & download OAuth cedentials 



---

# Run Sample

```bash
python -m googlesamples.assistant 
```

---

# 2. Design Principles {.big}

---
Trigger, Hotword
EIGENES BILD

---

# Bubbles

EIGNES BILD CON DEN APP BUBBELS

---

# 3. Change Hotword {.big}

---

# Snowboy 
BILD SNOWBOY

---

# Run

```bash
python demo.py yourtrainedmodel.pmdl
```

---

# 4. Demo {.big}

---

BILD SAMATA MOVIE COVER


---


# 5. Architecture of Sample App {.big}

---

# Api.ai
BILDAPIAI

---

# Intents
BILD APIAI

---

 

BILDAPIAI

---

# Options in Google Cloud

- VM (Compute Engine)
- DockerContainer with Nodejs Runtime (App Engine)
- Serverless Function (Cloud Functions)

---

# Cloud Firewall !Hint

BILD FIREWALL

---

# 6. Developing and Debugging Google Cloud Functions {.big}


---
# Local Emulator

---
# ngrok
BILDNGROK
A localhost tunnel 

---

# 7. Conclusion {.big}
- Limitation of Gcloud Functions
- Documentation
- German vs Ensglish 

---
# Future
BILD VON Conversation die von von in der Bubble started

---

# Thank you{.big}





