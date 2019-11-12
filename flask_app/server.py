print('importing libraries...')
from flask import Flask, request, jsonify

import PIL.Image as Image
import h5py
import os
from image import *
from model import CSRNet
import torch
import numpy
import requests
from torchvision import transforms
transform=transforms.Compose([
    transforms.ToTensor(),transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                               std=[0.229, 0.224, 0.225]),
                  ])
				  

import logging
import random
import time

from flask_cors import CORS, cross_origin


print('done!\nsetting up the directories and the model structure...')

app = Flask(__name__)
CORS(app, support_credentials=True)

#load model

with torch.no_grad():
  model = CSRNet()
  model = model.cuda()
  checkpoint = torch.load("E:/model building/Model/partBmodel_best.pth.tar")


model.load_state_dict(checkpoint['state_dict'])

#print(model)

print('done!\nloaded model')


@app.route("/")
def hello():
  return "Image classification example\n"

@app.route('/predict', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def predict():
  
  url = request.args['url']
  
  #url1 = "E:/model building/Model/IMG_38.jpg"
  
  img = transform(Image.open(url).convert('RGB')).cuda()
  output = model(img.unsqueeze(0))
  count=int(output.detach().cpu().sum().numpy())

  return jsonify([{'count':count}])
  
def predict():
  if request.method == "POST":
    url=request.form.get['url',False]
  if request.method == "GET":
    url = request.args['url']
  
  img = transform(Image.open(url).convert('RGB')).cuda()
  output = model(img.unsqueeze(0))
  count=int(output.detach().cpu().sum().numpy())

  return jsonify([{'count':count}])
  
  
#def predict():
  #url = "E:/model building/Model/IMG_38.jpg"
  #url = requests.get(url)
 # if request.method == "POST":
#	url=request.form['url']
 # else:
#	url = request.args['url']
  
  #response = requests.get("https://info.algorithmia.com/hubfs/Imported_Blog_Media/word-image-8.jpeg")
  #url_json=request.get_json()
  
  
 # img = transform(Image.open(url).convert('RGB')).cuda()
 # output = model(img.unsqueeze(0))
 # count=int(output.detach().cpu().sum().numpy())	
  #mydict=[{ "value": count}]
  
#  return jsonify([{'count':count}])
  #return jsonify(count)
  
	
	


if __name__ == '__main__':
  app.run(port=5000, debug=False)