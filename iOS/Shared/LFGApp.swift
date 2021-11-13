//
//  LFGApp.swift
//  Shared
//
//  Created by matt on 11/11/21.
//

import SwiftUI


func lezgo() {
    DispatchQueue.main.asyncAfter(deadline: .now() + 5) {
        exit(0)
    }
}

@main
struct LFGApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .onAppear(perform: lezgo)
        }
    }
}
