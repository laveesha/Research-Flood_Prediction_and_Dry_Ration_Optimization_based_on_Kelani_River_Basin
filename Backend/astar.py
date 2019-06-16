import json
import heapq
import math

class Route:
    lvnode=[]
    lvadj=[]
    lvstart=0
    lvend=0

    def __init__(self, _paramnode , _paramedge , _paramstart,_paramend):
        self.lvnode=[]
        self.lvadj=[[] for i in _paramnode]

        for n in _paramnode:
            self.lvnode.append((n['lat'], n['lng']))

        for e in _paramedge:
            self.lvadj[e['a']].append((e['b'],self.calcDist(e['a'], e['b'])))
            self.lvadj[e['b']].append((e['a'],self.calcDist(e['a'], e['b'])))

        self.lvstart=_paramstart
        self.lvend=_paramend



    def calcDist(self,a,b):
        return 111* math.sqrt((self.lvnode[a][0]-self.lvnode[b][0])*(self.lvnode[a][0]-self.lvnode[b][0])+(self.lvnode[a][1]-self.lvnode[b][1])*(self.lvnode[a][1]-self.lvnode[b][1]))


    def astar(self):
        dist=[-1 for i in self.lvnode]
        pre=[i for i in range(len(self.lvnode))]
        pq=[]

        heapq.heappush(pq,(0,0,self.lvstart,self.lvstart))
        while(len(pq)>0):
            top=heapq.heappop(pq)
            if(dist[top[2]]==-1):
                dist[top[2]]=top[1]
                pre[top[2]]=top[3]
                if(top[2]==self.lvend):
                    break
            for n in self.lvadj[top[2]]:
                heapq.heappush(pq,(top[1]+n[1]+self.calcDist(self.lvend, n[0]), top[1]+n[1], n[0], top[2]))

        last = self.lvend
        route = [last]

        while (last != self.lvstart):
            last = pre[last]
            print(last)
            route = [last]+route
            # last = last+1
        return {
            'route': route,
            'distance': dist[self.lvend]
        }


def receive(request):

    er = Route(json.loads(request['node']),
             json.loads(request['edge']),
             json.loads(request['start']),
             json.loads(request['end'])
             )
    return er.astar()

