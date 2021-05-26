from django.forms import ModelForm
from chatbot.models import chat_history

# Create the form class.


class ChatForm(ModelForm):
    class Meta:
        model = chat_history
        fields = '__all__'
